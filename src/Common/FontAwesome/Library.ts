import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faPlus, faEye, faDesktop, faBars } from '@fortawesome/free-solid-svg-icons'

const icons = [
    faBars,
    faHome,
    faPlus,
    faEye,
    faDesktop
]

const loadFontAwesomeLibraries = () => {
    library.add(...icons);
}

export { loadFontAwesomeLibraries }
