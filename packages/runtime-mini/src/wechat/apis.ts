import { getGlobalObject } from '@morjs/api/lib/env'
import { transformApis } from '@morjs/api/lib/utils'

/**
 * 微信需要被 promisified 的接口
 */
export const needPromisfiedApis = [
  'addPhoneContact',
  'authorize',
  'authPrivateMessage',
  'canvasGetImageData',
  'canvasPutImageData',
  'canvasToTempFilePath',
  'checkSession',
  'chooseAddress',
  'chooseImage',
  'chooseInvoiceTitle',
  'chooseLocation',
  'chooseVideo',
  'clearStorage',
  'closeBLEConnection',
  'closeBluetoothAdapter',
  'closeSocket',
  'compressImage',
  'connectSocket',
  'createBLEConnection',
  'disableAlertBeforeUnload',
  'downloadFile',
  'enableAlertBeforeUnload',
  'exitMiniProgram',
  'getAvailableAudioSources',
  'getBackgroundFetchData',
  'getBatteryInfo',
  'getBeacons',
  'getBLEDeviceCharacteristics',
  'getBLEDeviceServices',
  'getBluetoothAdapterState',
  'getBluetoothDevices',
  'getClipboardData',
  'getConnectedBluetoothDevices',
  'getConnectedWifi',
  'getExtConfig',
  'getFileInfo',
  'getGroupEnterInfo',
  'getImageInfo',
  'getLocation',
  'getNetworkType',
  'getSavedFileInfo',
  'getSavedFileList',
  'getScreenBrightness',
  'getSetting',
  'getShareInfo',
  'getStorage',
  'getStorageInfo',
  'getSystemInfo',
  'getUserInfo',
  'getWeRunData',
  'getWifiList',
  'hideHomeButton',
  'hideKeyboard',
  'hideLoading',
  'hideNavigationBarLoading',
  'hideShareMenu',
  'hideTabBar',
  'hideTabBarRedDot',
  'hideToast',
  'join1v1Chat',
  'loadFontFace',
  'login',
  'makePhoneCall',
  'navigateBack',
  'navigateBackMiniProgram',
  'navigateTo',
  'navigateToBookshelf',
  'navigateToMiniProgram',
  'notifyBLECharacteristicValueChange',
  'openBluetoothAdapter',
  'openCustomerServiceChat',
  'openDocument',
  'openLocation',
  'openSetting',
  'openVideoEditor',
  'pageScrollTo',
  'previewImage',
  'queryBookshelf',
  'readBLECharacteristicValue',
  'redirectTo',
  'reLaunch',
  'removeSavedFile',
  'removeStorage',
  'removeTabBarBadge',
  'requestSubscribeMessage',
  'saveFile',
  'saveFileToDisk',
  'saveImageToPhotosAlbum',
  'saveVideoToPhotosAlbum',
  'scanCode',
  'scanItem',
  'sendBizRedPacket',
  'sendSocketMessage',
  'setBackgroundColor',
  'setBackgroundTextStyle',
  'setClipboardData',
  'setEnable1v1Chat',
  'setEnableDebug',
  'setInnerAudioOption',
  'setKeepScreenOn',
  'setNavigationBarColor',
  'setNavigationBarTitle',
  'setScreenBrightness',
  'setStorage',
  'setTabBarBadge',
  'setTabBarItem',
  'setTabBarStyle',
  'setWindowSize',
  'showActionSheet',
  'showFavoriteGuide',
  'showLoading',
  'showModal',
  'showNavigationBarLoading',
  'showShareMenu',
  'showTabBar',
  'showTabBarRedDot',
  'showToast',
  'startAccelerometer',
  'startBeaconDiscovery',
  'startBluetoothDevicesDiscovery',
  'startCompass',
  'startDeviceMotionListening',
  'startFacialRecognitionVerify',
  'startPullDownRefresh',
  'stopAccelerometer',
  'stopBeaconDiscovery',
  'stopBluetoothDevicesDiscovery',
  'stopCompass',
  'stopDeviceMotionListening',
  'stopPullDownRefresh',
  'switchTab',
  'uploadFile',
  'vibrateLong',
  'vibrateShort',
  'writeBLECharacteristicValue'
]

export function initApi(mor: Record<string, any>) {
  transformApis(mor, getGlobalObject(), {
    needPromisfiedApis
  })
}
