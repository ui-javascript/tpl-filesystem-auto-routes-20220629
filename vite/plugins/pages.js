import Pages from 'vite-plugin-pages'

export default function createPages() {
    return Pages({
        dirs: 'src/views',
        exclude: [
            '**/components/**/*.vue',
            '**/**@bak/**/*.vue',
            '**/**@ignore/**/*.vue',
            '**/*@bak.vue',
            '**/*@ignore.vue'
        ],
        extensions: ['vue'],
        // importMode: 'sync',
    })
}
