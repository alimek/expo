// Copyright 2015-present 650 Industries. All rights reserved.
package versioned.host.exp.exponent

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.provider.Settings
import com.facebook.common.logging.FLog
import com.facebook.react.common.ReactConstants
import com.facebook.react.packagerconnection.NotificationOnlyHandler
import com.facebook.react.packagerconnection.RequestHandler
import expo.modules.jsonutils.getNullable
import host.exp.exponent.experience.ExperienceActivity
import host.exp.exponent.experience.ReactNativeActivity
import host.exp.expoview.Exponent
import org.json.JSONObject

object VersionedUtils {
  private fun toggleExpoDevMenu() {
    val currentActivity = Exponent.instance.currentActivity
    if (currentActivity is ExperienceActivity) {
      currentActivity.toggleDevMenu()
    } else {
      FLog.e(
        ReactConstants.TAG,
        "Unable to toggle the Expo dev menu because the current activity could not be found."
      )
    }
  }

  private fun reloadExpoApp() = synchronized(this) {
    val currentActivity = Exponent.instance.currentActivity as? ReactNativeActivity ?: return run {
      FLog.e(
        ReactConstants.TAG,
        "Unable to reload the app because the current activity could not be found."
      )
    }
    val devSupportManager = currentActivity.devSupportManager ?: return run {
      FLog.e(
        ReactConstants.TAG,
        "Unable to get the DevSupportManager from current activity."
      )
    }

    devSupportManager.reloadExpoApp()
  }

  private fun toggleElementInspector() {
    val currentActivity = Exponent.instance.currentActivity as? ReactNativeActivity ?: return run {
      FLog.e(
        ReactConstants.TAG,
        "Unable to toggle the element inspector because the current activity could not be found."
      )
    }
    val devSupportManager = currentActivity.devSupportManager ?: return run {
      FLog.e(
        ReactConstants.TAG,
        "Unable to get the DevSupportManager from current activity."
      )
    }

    devSupportManager.toggleElementInspector()
  }

  private fun requestOverlayPermission(context: Context) {
    // From the unexposed DebugOverlayController static helper
    // Get permission to show debug overlay in dev builds.
    if (!Settings.canDrawOverlays(context)) {
      val intent = Intent(
        Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
        Uri.parse("package:" + context.packageName)
      ).apply {
        flags = Intent.FLAG_ACTIVITY_NEW_TASK
      }
      FLog.w(
        ReactConstants.TAG,
        "Overlay permissions needs to be granted in order for React Native apps to run in development mode"
      )
      if (intent.resolveActivity(context.packageManager) != null) {
        context.startActivity(intent)
      }
    }
  }

  private fun togglePerformanceMonitor() {
    val currentActivity = Exponent.instance.currentActivity as? ReactNativeActivity ?: return run {
      FLog.e(
        ReactConstants.TAG,
        "Unable to toggle the performance monitor because the current activity could not be found."
      )
    }
    val devSupportManager = currentActivity.devSupportManager ?: return run {
      FLog.e(
        ReactConstants.TAG,
        "Unable to get the DevSupportManager from current activity."
      )
    }

    val devSettings = devSupportManager.devSettings
    if (devSettings != null) {
      if (!devSettings.isFpsDebugEnabled) {
        // Request overlay permission if needed when "Show Perf Monitor" option is selected
        requestOverlayPermission(currentActivity)
      }
      devSettings.isFpsDebugEnabled = !devSettings.isFpsDebugEnabled
    }
  }

  private fun reconnectReactDevTools() {
    val currentActivity = Exponent.instance.currentActivity as? ReactNativeActivity ?: return run {
      FLog.e(
        ReactConstants.TAG,
        "Unable to get the current activity."
      )
    }
    // Emit the `RCTDevMenuShown` for the app to reconnect react-devtools
    // https://github.com/facebook/react-native/blob/22ba1e45c52edcc345552339c238c1f5ef6dfc65/Libraries/Core/setUpReactDevTools.js#L80
    currentActivity.emitRCTNativeAppEvent("RCTDevMenuShown", null)
  }

  fun createPackagerCommandHelpers(): Map<String, RequestHandler> {
    // Attach listeners to the bundler's dev server web socket connection.
    // This enables tools to automatically reload the client remotely (i.e. in expo-cli).
    val packagerCommandHandlers = mutableMapOf<String, RequestHandler>()

    // Enable a lot of tools under the same command namespace
    packagerCommandHandlers["sendDevCommand"] = object : NotificationOnlyHandler() {
      override fun onNotification(params: Any?) {
        if (params != null && params is JSONObject) {
          when (params.getNullable<String>("name")) {
            "reload" -> reloadExpoApp()
            "toggleDevMenu" -> toggleExpoDevMenu()
            "toggleElementInspector" -> toggleElementInspector()
            "togglePerformanceMonitor" -> togglePerformanceMonitor()
            "reconnectReactDevTools" -> reconnectReactDevTools()
          }
        }
      }
    }

    // These commands (reload and devMenu) are here to match RN dev tooling.

    // Reload the app on "reload"
    packagerCommandHandlers["reload"] = object : NotificationOnlyHandler() {
      override fun onNotification(params: Any?) {
        reloadExpoApp()
      }
    }

    // Open the dev menu on "devMenu"
    packagerCommandHandlers["devMenu"] = object : NotificationOnlyHandler() {
      override fun onNotification(params: Any?) {
        toggleExpoDevMenu()
      }
    }

    return packagerCommandHandlers
  }
}
