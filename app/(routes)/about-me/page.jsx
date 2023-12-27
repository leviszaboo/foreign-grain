import AboutMePage from "@/app/components/AboutMe/AboutMePage"
import Menu from "@/app/components/Menu/Menu/Menu"
import MemorizePosition from "@/app/components/Work/MemorizePosition"

const paragraphs = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    color: 'white'
  },
  {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    color: 'white'
  },
  {
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: 'white'
  },
  {
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
    color: 'white'
  },
  {
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    color: 'white'
  },
  {
    text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    color: 'white'
  },
  {
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae cons.',
    color: 'white'
  }
]

const sources = [
  { source: '/Media/horizontal-final/patta-hor.jpeg', width: 74 },
  { source: '/Media/vertical-final/tno-vert.jpeg', width: 85 },
  { source: '/Media/vertical-final/patta-vert.jpeg', width: 71 },
  { source: '/Media/horizontal-final/pond.jpeg', width: 78 },
  { source: '/Media/vertical-final/mask.jpeg', width: 90 },
  { source: '/Media/gallery/blockparty.jpeg', width: 84 },
  { source: '/Media/gallery/dj.jpeg', width: 74 },
  { source: '/Media/gallery/sauf.jpeg', width: 83 },
  { source: '/Media/gallery/vinyl-store.jpeg', width: 89 }
]

export default function AboutMe() {
  return (
    <>
      <MemorizePosition>
        <Menu/>
        <AboutMePage paragraphs={paragraphs} sources={sources}/>
      </MemorizePosition>
    </>
  )
}
