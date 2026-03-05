const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// TODO: Cambia esta URL por la de tu distribution.json alojado en GitHub Pages o tu servidor.
// Ejemplo GitHub Pages: https://tu-usuario.github.io/altialauncher-files/distribution.json
// Ejemplo servidor propio: https://tudominio.com/files/distribution.json
exports.REMOTE_DISTRO_URL = 'https://files.altiasoft.com.co/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api