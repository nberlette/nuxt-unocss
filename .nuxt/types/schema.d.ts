import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    content: {
        cacheVersion: number,

        cacheIntegrity: string,

        transformers: Array<string>,

        base: string,

        watch: {
             ws: {
                   port: number,

                   showURL: boolean,
             },
        },

        sources: any,

        ignores: Array<string>,

        locales: Array<any>,

        defaultLocale: any,

        highlight: {
             theme: string,

             preload: Array<string>,

             apiURL: string,
        },

        markdown: {
             tags: {
                   p: string,

                   a: string,

                   blockquote: string,

                   "code-inline": string,

                   code: string,

                   em: string,

                   h1: string,

                   h2: string,

                   h3: string,

                   h4: string,

                   h5: string,

                   h6: string,

                   hr: string,

                   img: string,

                   ul: string,

                   ol: string,

                   li: string,

                   strong: string,

                   table: string,

                   thead: string,

                   tbody: string,

                   td: string,

                   th: string,

                   tr: string,
             },

             toc: {
                   depth: number,

                   searchDepth: number,
             },

             remarkPlugins: any,

             rehypePlugins: any,
        },

        yaml: any,

        csv: {
             delimeter: string,

             json: boolean,
        },

        navigation: {
             fields: Array<string>,
        },

        documentDriven: boolean,
    },
  }
  interface PublicRuntimeConfig {
     content: {
        base: string,

        tags: {
             p: string,

             a: string,

             blockquote: string,

             "code-inline": string,

             code: string,

             em: string,

             h1: string,

             h2: string,

             h3: string,

             h4: string,

             h5: string,

             h6: string,

             hr: string,

             img: string,

             ul: string,

             ol: string,

             li: string,

             strong: string,

             table: string,

             thead: string,

             tbody: string,

             td: string,

             th: string,

             tr: string,
        },

        highlight: {
             theme: string,

             preload: Array<string>,

             apiURL: string,
        },

        wsUrl: string,

        documentDriven: {
             page: boolean,

             navigation: boolean,

             surround: boolean,

             globals: any,

             layoutFallbacks: Array<string>,

             injectPage: boolean,
        },
    },
  }
}