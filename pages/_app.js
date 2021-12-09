import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function MyApp({ Component, pageProps }) {
	return(
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp