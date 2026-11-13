import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import EquipmentSection from '../../components/EquipmentSection/EquipmentSection'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import ContactBanner from '../../components/ContactBanner/ContactBanner'
import AboutSection from '../../components/AboutSection/AboutSection'
import './Home.css'

function Home() {
 return <>
 <Header active="home" />
 <main>
 <Hero />
 <EquipmentSection />
 <WhyChooseUs />
 <ContactBanner />
 <AboutSection />
 </main>
 <Footer />
 </>
}

export default Home
