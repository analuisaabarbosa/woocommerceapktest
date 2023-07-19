const allure = require('allure-commandline')

exports.config = {

    //runner: 'local',
    //port: 4723,
    user: 'analuisaaugustob_52Y4rp',
    key: '4ZUWN4kzNVy3rLVrVePb',
    services: ['browserstack'],

    specs: [
        './test/spec/**.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        'app': 'bs://54d3f1f52ad92e70346426dff397a4ed10e394b9',
        'device': 'Motorola Moto G7 Play',
        'os_version': '9.0',
        'project': 'Teste Funcional Woocommerce',
        'build': 'build-1',
        'name': 'WoocommerceApkTest'
    }],

    logLevel: 'info',

    bail: 0,

    baseUrl: 'http://localhost',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },

    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        driver.takeScreenshot();
    },
}
