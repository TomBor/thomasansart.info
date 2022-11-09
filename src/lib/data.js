import bagnes from '$img/projects/bagnes.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import lucas from '$img/projects/lucas-cranach.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import rmn from '$img/projects/rmn-1.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import qi from '$img/projects/QI-10.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import afco from '$img/projects/afco-234.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import ceri from '$img/projects/ceriscope-2.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import algerie from '$img/projects/paris-algerie-1.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import mondialisation from '$img/projects/atlas-couv.png?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import louvre from '$img/projects/louvre-med-1.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import mooc from '$img/projects/mooc-em-1.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import senat from '$img/projects/senat-4.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import mondalim from '$img/projects/mondalim-1.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import mnhi from '$img/projects/mnhi-1.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import migrants from '$img/projects/missing-migrants.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import sziget from '$img/projects/sziget-4.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import khartis from '$img/projects/khartis-1.png?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import redbubble from '$img/projects/redbubble-2.png?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import anthro from '$img/projects/anthro-couv.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import drole from '$img/projects/drole-planete-5.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import br163 from '$img/projects/br163-4.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import urban from '$img/projects/atlas-urbains-couv.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'
import eolif from '$img/projects/eolif-1.jpg?w=800;400&h=500;250&fit=cover&format=avif;webp&picture'


const rawData = [
    {
        id: "bagnes",
        date: "2018-08-01",
        title: '« Les bagnes coloniaux »',
        tags: ['Exposition'],
        thumbnail: bagnes,
        gallery: ['bagnes.jpg']
    },
    {
        id: "lucas-cranach",
        date: "2018-08-02",
        title: '« Lucas Cranach et son temps »',
        tags: ['Exposition'],
        thumbnail: lucas,
        gallery: ['lucas-cranach.jpg']
    },
    {
        id: "rmn",
        date: "2018-08-03",
        title: 'Les collections en ligne de la RMN',
        tags: ['Exposition', 'web'],
        thumbnail: rmn,
        gallery: addFilename('rmn', 4, 'jpg')
    },
    {
        id: "qi",
        date: "2018-08-04",
        title: 'Questions internationales',
        tags: ['Print'],
        thumbnail: qi,
        gallery: addFilename('QI', 14, 'jpg')
    },
    {
        id: "afco",
        date: "2018-08-05",
        title: 'Afrique contemporaine',
        tags: ['Print'],
        thumbnail: afco,
        gallery: ['afco-234.jpg', 'afco-235.jpg', 'afco-239.jpg']
    },
    {
        id: "ceri",
        date: "2018-08-06",
        title: 'La collection Ceriscopes',
        tags: ['Web'],
        thumbnail: ceri,
        gallery: addFilename('ceriscope', 6, 'jpg')
    },
    {
        id: "algerie",
        date: "2018-08-07",
        title: "« Paris en guerre d'Algérie »",
        tags: ['Exposition'],
        thumbnail: algerie,
        gallery: addFilename('paris-algerie', 7, 'jpg')
    },
    {
        id: "mondialisation",
        date: "2018-08-08",
        title: "Atlas de la mondialisation 2013",
        tags: ['Atlas', 'Print'],
        thumbnail: mondialisation,
        gallery: addFilename('atlas', 8, 'jpg')
    },
    {
        id: "louvre",
        date: "2018-08-09",
        title: "« La Méditerranée dans les collections du Louvre »",
        tags: ['Exposition'],
        thumbnail: louvre,
        gallery: addFilename('louvre-med', 6, 'jpg')
    },
    {
        id: "mooc",
        date: "2018-08-10",
        title: "MOOC Espace Mondial",
        tags: ['Web'],
        thumbnail: mooc,
        gallery: addFilename('mooc-em', 4, 'jpg')
    },
    {
        id: "senat",
        date: "2018-08-11",
        title: "Sénat - « L'Afrique est notre avenir »",
        tags: ['Print'],
        thumbnail: senat,
        gallery: addFilename('senat', 4, 'jpg')
    },
    {
        id: "mondalim",
        date: "2018-08-12",
        title: "MOND’Alim 2030, Panorama prospectif de la mondialisation des systèmes alimentaires",
        tags: ['Print'],
        thumbnail: mondalim,
        gallery: addFilename('mondalim', 4, 'jpg')
    },
    {
        id: "mnhi",
        date: "2018-08-13",
        title: "Prologue du musée national de l'histoire de l'immigration",
        tags: ['Exposition'],
        thumbnail: mnhi,
        gallery: addFilename('mnhi', 4, 'jpg')
    },
    {
        id: "migrants",
        date: "2018-08-14",
        title: "Migrants morts et disparus en Méditerranée",
        tags: ['Web', 'dev'],
        thumbnail: migrants,
        gallery: ['missing-migrants.jpg']
    },
    {
        id: "sziget",
        date: "2018-08-15",
        title: "Sziget festival x MNHI",
        tags: ['Exposition'],
        thumbnail: sziget,
        gallery: addFilename('sziget', 4, 'jpg')
    },
    {
        id: "khartis",
        date: "2018-08-16",
        title: "Khartis - cartographie thématique",
        tags: ['Tool', 'Web'],
        thumbnail: khartis,
        gallery: addFilename('khartis', 6, 'png')
    },
    {
        id: "redbubble",
        date: "2018-08-17",
        title: "Temps libre",
        tags: ['Print'],
        thumbnail: redbubble,
        gallery: ['redbubble-1.jpg', 'redbubble-2.png', 'redbubble-3.jpg', 'redbubble-4.png']
    },
    {
        id: "anthro",
        date: "2019-08-29",
        title: "Atlas de l'Anthropocène",
        tags: ['Atlas', 'Print'],
        thumbnail: anthro,
        gallery: addFilename('anthro', 6, 'jpg')
    },
    {
        id: "drole",
        date: "2019-11-06",
        title: "Drôle de planète",
        tags: ['Atlas', 'Print'],
        thumbnail: drole,
        gallery: addFilename('drole-planete', 5, 'jpg')
    },
    {
        id: "br163",
        date: "2019-12-23",
        title: "Le long de la route BR-163",
        tags: ['Web'],
        thumbnail: br163,
        gallery: addFilename('br163', 6, 'jpg')
    },
    {
        id: "urban",
        date: "2020-10-30",
        title: "Atlas des mondes urbains",
        tags: ['Atlas', 'Print'],
        thumbnail: urban,
        gallery: addFilename('atlas-urbains', 6, 'jpg')
    },
    {
        id: "eolif",
        date: "2020-12-15",
        title: "Éolif",
        tags: ['Web', 'dev'],
        thumbnail: eolif,
        gallery: ['eolif-1.jpg', 'eolif-2.jpg']
    },
]

export default rawData.sort((a, b) => new Date(b.date) - new Date(a.date))

export function getProject(id) {
    return rawData.filter(d => d.id === id)
}

/**
 * @param {String} id
 * @param {Number} number
 * @param {String} extension
 */
function addFilename(id, number, extension) {
    const array = new Array(number).fill(null)
    return array.map((d, i) => `${id}-${i + 1}.${extension}`)
}