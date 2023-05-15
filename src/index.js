import * as Vue from 'vue'
import { loadModule } from 'vue3-sfc-loader'
import createLessCompiler from './less/web/index.js'

export const loadApp = (sfcSrc, options = {}) => {
    const { lessConfig = {}, moduleMapping = {}, fetchFunction = window.fetch } = options
    const { defineAsyncComponent, createApp } = Vue

    const less = createLessCompiler(lessConfig)
    const compilerOptions = {
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

    const home = defineAsyncComponent(() => loadModule(sfcSrc, compilerOptions))
    const app = createApp(home)
    return app
}

export { Vue }
