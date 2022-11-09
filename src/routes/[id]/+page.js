import { getProject } from "$lib/data";

export async function load({ params }) {
    const id = params.id
    const data = getProject(id)[0]
    data.content = (await import(`../../md/${id}.md?raw`)).default

    // Batch import images with imagetools and svelte pre-process
    // https://github.com/sveltejs/kit/issues/241#issuecomment-1274046866
    data.gallery = await Promise.all(data.gallery.map(d => transformImg(d)))

    return data
}

async function transformImg(filename) {
    const [name, extension] = typeof filename === 'string' ? filename.split('.') : filename.toString().split('.')
    switch (extension) {
        case 'jpg':
            return (await import(`../../img/projects/${name}.jpg`)).default
        case 'jpeg':
            return (await import(`../../img/projects/${name}.jpeg`)).default
        case 'png':
            return (await import(`../../img/projects/${name}.png`)).default
        case 'gif':
            return (await import(`../../img/projects/${name}.gif`)).default
        default:
            break;
    }
}