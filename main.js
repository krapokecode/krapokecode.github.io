import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Mali:400,500|Nunito'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://unpkg.com/papercss@1.6.1/dist/paper.min.css'
  })
}
