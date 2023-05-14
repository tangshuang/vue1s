import * as Vue from 'https://cdn.jsdelivr.net/npm/vue/dist/vue.esm-browser.prod.js'
import { loadModule } from 'https://cdn.jsdelivr.net/npm/vue3-sfc-loader/dist/vue3-sfc-loader.esm.js'
import createLessCompiler from './less/web/index.js'

export const loadApp = (sfcSrc, options = {}) => {
    const { lessConfig = {}, moduleMapping = {}, fetchFunction = window.fetch } = options
    const less = createLessCompiler(lessConfig)
    const options = {
        moduleCache: {
            vue: Vue,
            less,
            ...moduleMapping,
        },
        async getFile(url) {
            const res = await fetchFunction(url);
            if ( !res.ok )
                throw Object.assign(new Error(res.statusText + ' ' + url), { res })
            return {
                getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
            }
        },
        addStyle(textContent) {
            const style = Object.assign(document.createElement('style'), { textContent })
            const ref = document.head.getElementsByTagName('style')[0] || null
            document.head.insertBefore(style, ref)
        },
    }
    const home = Vue.defineAsyncComponent(() => loadModule(sfcSrc, options))
    const app = Vue.createApp(home)
    return app
}
