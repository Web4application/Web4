import vitePlugin from 'vite-plugin-feature'
import rollupPlugin from 'rollup-plugin-feature'
import { msg } from 'virtual:my-module'
import { defineConfig } from 'vite'
import framework from 'vite-plugin-framework'
import frameworkRefresh from 'vite-plugin-framework-refresh'
import frameworkDevtools from 'vite-plugin-framework-devtools'

console.log(msg)
export default defineConfig({
  plugins: [vitePlugin(), rollupPlugin()],
})
// framework-plugin

export default function framework(config) {
  return [frameworkRefresh(config), frameworkDevTools(config)]
}

export default defineConfig({
  plugins: [framework()],
})
const fileRegex = /\.(my-file-ext)$/

export default function myPlugin() {
  return {
    name: 'transform-file',

    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: compileFileToJS(src),
          map: null, // provide source map if available
        }
      }
    },
  }
}
export default function myPlugin() {
  const virtualModuleId = 'virtual:my-module'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'my-plugin', // required, will show up in warnings and errors
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const msg = "from virtual module"`
      }
    },
  }
}
// return partial config (recommended)
const partialConfigPlugin = () => ({
  name: 'return-partial',
  config: () => ({
    resolve: {
      alias: {
        foo: 'bar',
      },
    },
  }),
})

// mutate the config directly (use only when merging doesn't work)
const mutateConfigPlugin = () => ({
  name: 'mutate-config',
  config(config, { command }) {
    if (command === 'build') {
      config.root = 'foo'
    }
  },
})
const examplePlugin = () => {
  let config

  return {
    name: 'read-config',

    configResolved(resolvedConfig) {
      // store the resolved config
      config = resolvedConfig
    },

    // use stored config in other hooks
    transform(code, id) {
      if (config.command === 'serve') {
        // dev: plugin invoked by dev server
      } else {
        // build: plugin invoked by Rollup
      }
    },
  }
}
const myPlugin = () => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // custom handle request...
    })
  },
})
const myPlugin = () => ({
  name: 'configure-server',
  configureServer(server) {
    // return a post hook that is called after internal middlewares are
    // installed
    return () => {
      server.middlewares.use((req, res, next) => {
        // custom handle request...
      })
    }
  },
})
const myPlugin = () => {
  let server
  return {
    name: 'configure-server',
    configureServer(_server) {
      server = _server
    },
    transform(code, id) {
      if (server) {
        // use server...
      }
    },
  }
}
const myPlugin = () => ({
  name: 'configure-preview-server',
  configurePreviewServer(server) {
    // return a post hook that is called after other middlewares are
    // installed
    return () => {
      server.middlewares.use((req, res, next) => {
        // custom handle request...
      })
    }
  },
})
const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>Title replaced!</title>`,
      )
    },
  }
}
type IndexHtmlTransformHook = (
  html: string,
  ctx: {
    path: string
    filename: string
    server?: ViteDevServer
    bundle?: import('rollup').OutputBundle
    chunk?: import('rollup').OutputChunk
  },
) =>
  | IndexHtmlTransformResult
  | void
  | Promise<IndexHtmlTransformResult | void>

type IndexHtmlTransformResult =
  | string
  | HtmlTagDescriptor[]
  | {
      html: string
      tags: HtmlTagDescriptor[]
    }

interface HtmlTagDescriptor {
  tag: string
  /**
   * attribute values will be escaped automatically if needed
   */
  attrs?: Record<string, string | boolean>
  children?: string | HtmlTagDescriptor[]
  /**
   * default: 'head-prepend'
   */
  injectTo?: 'head' | 'body' | 'head-prepend' | 'body-prepend'
}
interface HmrContext {
  file: string
  timestamp: number
  modules: Array<ModuleNode>
  read: () => string | Promise<string>
  server: ViteDevServer
}
interface HmrContext {
  file: string
  timestamp: number
  modules: Array<ModuleNode>
  read: () => string | Promise<string>
  server: ViteDevServer
}
handleHotUpdate({ server, modules, timestamp }) {
  // Invalidate modules manually
  const invalidatedModules = new Set()
  for (const mod of modules) {
    server.moduleGraph.invalidateModule(
      mod,
      invalidatedModules,
      timestamp,
      true
    )
  }
  server.ws.send({ type: 'full-reload' })
  return []
}if (import.meta.hot) {
  import.meta.hot.on('special-update', (data) => {
    // perform custom update
  })
}
if (import.meta.hot) {
  import.meta.hot.on('special-update', (data) => {
    // perform custom update
  })
}
function myPlugin() {
  return {
    name: 'build-only',
    apply: 'build', // or 'serve'
  }
}
apply(config, { command }) {
  // apply only on build but not for SSR
  return command === 'build' && !config.build.ssr
}
