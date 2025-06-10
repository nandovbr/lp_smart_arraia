import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, Calendar, Truck, Wrench, Shield, CreditCard, Check, MapPin, Clock } from 'lucide-react'
import './App.css'

// Import images
import bannerPrincipal from './assets/banner_principal.png'
import logoSmart from './assets/logo_smart.png'
import sofaRetratil from './assets/sofa_retratil_3lugares.jpg'
import sofaCanto from './assets/sofa_canto_chaise.jpg'
import colchaoMolas from './assets/colchao_molas_ensacadas.jpg'

function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const countDownDate = new Date("Jun 21, 2024 20:00:00").getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now
      
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleProductClick = (productName) => {
    const message = `Olá! Tenho interesse no produto: ${productName} da promoção Arraiá Smart Móveis. Gostaria de mais informações.`
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    e.target.reset()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#24476e] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="logo">
              <img src={logoSmart} alt="Smart Móveis Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#sofas" className="text-white hover:text-orange-400 font-medium transition-colors">Sofás</a>
              <a href="#colchoes" className="text-white hover:text-orange-400 font-medium transition-colors">Colchões</a>
              <a href="#contato" className="text-white hover:text-orange-400 font-medium transition-colors">Contato</a>
            </nav>
            <div className="flex items-center gap-2 text-white font-semibold">
              <Phone className="w-5 h-5" />
              <span>(11) 99999-9999</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-10">
          <img src={bannerPrincipal} alt="Arraiá Smart Móveis" className="w-full h-full object-cover opacity-90" />
        </div>
        <div className="relative z-20 w-full pt-20 pb-12">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-shadow-lg font-dancing-script animate-bounce-in">
              ARRAIÁ, MELHOR QUE DESAPEGA!
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Promoções especiais que vão aquecer seu coração e sua casa
            </p>
            <div className="flex items-center justify-center gap-4 mb-12 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 inline-flex">
              <Calendar className="w-6 h-6" />
              <span className="text-lg font-semibold">20 e 21 de Junho - Apenas 2 dias!</span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <div className="bg-white/95 text-red-600 p-6 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform">
                <div className="text-sm font-semibold mb-2">SOFÁS A PARTIR DE</div>
                <div className="text-4xl font-bold">R$ 899</div>
              </div>
              <div className="bg-white/95 text-red-600 p-6 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform">
                <div className="text-sm font-semibold mb-2">COLCHÕES COM BASE BOX</div>
                <div className="text-4xl font-bold">R$ 1.299</div>
              </div>
            </div>
            
            <Button 
              onClick={() => scrollToSection('sofas')}
              className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              VER OFERTAS IMPERDÍVEIS
              <span className="ml-2">↓</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <Truck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Entrega Grátis</h3>
              <p className="text-gray-600">Para toda região metropolitana</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <Wrench className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Montagem Inclusa</h3>
              <p className="text-gray-600">Nossa equipe monta para você</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Garantia Estendida</h3>
              <p className="text-gray-600">Até 5 anos de garantia</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <CreditCard className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">12x Sem Juros</h3>
              <p className="text-gray-600">No cartão de crédito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sofas Section */}
      <section id="sofas" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
              SOFÁS QUE VÃO FAZER VOCÊ SE SENTIR EM CASA
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conforto, estilo e qualidade se encontram em nossa seleção especial de sofás
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sofá 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={sofaRetratil} alt="Sofá Retrátil 3 Lugares" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  32% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Sofá Retrátil e Reclinável 3 Lugares</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Tecido suede premium</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Sistema retrátil</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Espuma D33</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 1.899,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 1.299,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 600,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Sofá Retrátil e Reclinável 3 Lugares')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE SOFÁ
                </Button>
              </div>
            </div>

            {/* Sofá 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={sofaCanto} alt="Sofá de Canto Chaise" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  28% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Sofá de Canto Chaise 5 Lugares</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Design moderno em L</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Tecido linho impermeabilizado</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Almofadas incluídas</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 2.499,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 1.799,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 700,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Sofá de Canto Chaise 5 Lugares')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE SOFÁ
                </Button>
              </div>
            </div>

            {/* Sofá 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={sofaRetratil} alt="Sofá Cama com Baú" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  29% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Sofá Cama Casal com Baú</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Função cama para 2</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Baú para armazenamento</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Mecanismo alemão</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 1.699,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 1.199,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 500,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Sofá Cama Casal com Baú')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE SOFÁ
                </Button>
              </div>
            </div>

            {/* Sofá 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={sofaCanto} alt="Sofá 2 Lugares Clássico" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  31% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Sofá 2 Lugares Fixo Clássico</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Design atemporal</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Tecido jacquard</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Garantia de 2 anos</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 1.299,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 899,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 400,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Sofá 2 Lugares Fixo Clássico')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE SOFÁ
                </Button>
              </div>
            </div>

            {/* Sofá 5 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={sofaRetratil} alt="Sofá Premium" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  24% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Sofá Retrátil 4 Lugares Premium</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Couro sintético premium</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Sistema elétrico</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>USB + LED</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 2.899,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 2.199,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 700,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Sofá Retrátil 4 Lugares Premium')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE SOFÁ
                </Button>
              </div>
            </div>

            {/* Sofá 6 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={sofaCanto} alt="Sofá Modular" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  27% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Sofá Modular 3 Módulos</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Sistema modular flexível</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Tecido bouclê moderno</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Base em metal</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 2.199,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 1.599,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 600,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Sofá Modular 3 Módulos')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE SOFÁ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mattresses Section */}
      <section id="colchoes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
              COLCHÕES COM BASE BOX E BAÚ - O SONO DOS SEUS SONHOS
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforme suas noites em momentos de descanso reparador
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Colchão 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={colchaoMolas} alt="Colchão Molas Ensacadas" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  27% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Conjunto Casal Molas Ensacadas Premium</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>1.200 molas ensacadas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Base box com baú</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Pillow top duplo</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 2.199,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 1.599,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 600,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Conjunto Casal Molas Ensacadas Premium')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE COLCHÃO
                </Button>
              </div>
            </div>

            {/* Colchão 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={colchaoMolas} alt="Colchão Queen Viscoelástica" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  29% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Conjunto Queen Size Espuma Viscoelástica</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Espuma NASA</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Base queen com baú duplo</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>10 anos garantia</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 2.799,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 1.999,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 800,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Conjunto Queen Size Espuma Viscoelástica')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE COLCHÃO
                </Button>
              </div>
            </div>

            {/* Colchão 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={colchaoMolas} alt="Colchão Solteiro Ortopédico" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  29% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Conjunto Solteiro Ortopédico Juvenil</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Densidade D45 ortopédica</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Base com baú organizador</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Hipoalergênico</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 1.399,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 999,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 400,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Conjunto Solteiro Ortopédico Juvenil')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE COLCHÃO
                </Button>
              </div>
            </div>

            {/* Colchão 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={colchaoMolas} alt="Colchão Pocket Spring Luxo" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  27% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Conjunto Casal Pocket Spring Luxo</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>2.000 molas pocket</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Base com baú e gavetas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Gel refrescante</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 3.299,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 2.399,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 900,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Conjunto Casal Pocket Spring Luxo')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE COLCHÃO
                </Button>
              </div>
            </div>

            {/* Colchão 5 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={colchaoMolas} alt="Colchão King Híbrido" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  28% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Conjunto King Size Híbrido</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Molas + espuma</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Base king com baú gigante</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Íons de prata</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 3.899,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 2.799,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 1.100,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Conjunto King Size Híbrido')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE COLCHÃO
                </Button>
              </div>
            </div>

            {/* Colchão 6 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="relative">
                <img src={colchaoMolas} alt="Colchão Econômico" className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  24% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Conjunto Casal Econômico Confort</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Espuma D33 qualidade</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Base com baú prático</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Custo-benefício</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-500 line-through text-sm">R$ 1.699,00</div>
                  <div className="text-3xl font-bold text-red-600">R$ 1.299,00</div>
                  <div className="text-green-600 font-semibold text-sm">Economia: R$ 400,00</div>
                </div>
                <Button 
                  onClick={() => handleProductClick('Conjunto Casal Econômico Confort')}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO ESTE COLCHÃO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ÚLTIMAS HORAS! NÃO PERCA ESSA OPORTUNIDADE</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            O Arraiá Smart Móveis acontece apenas nos dias 20 e 21 de junho. São ofertas limitadas e imperdíveis que não se repetem!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl min-w-[120px]">
              <div className="text-4xl font-bold">{countdown.days.toString().padStart(2, '0')}</div>
              <div className="text-sm opacity-90">Dias</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl min-w-[120px]">
              <div className="text-4xl font-bold">{countdown.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm opacity-90">Horas</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl min-w-[120px]">
              <div className="text-4xl font-bold">{countdown.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm opacity-90">Minutos</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl min-w-[120px]">
              <div className="text-4xl font-bold">{countdown.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm opacity-90">Segundos</div>
            </div>
          </div>
          
          <Button 
            onClick={() => scrollToSection('contato')}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            GARANTIR MINHA OFERTA AGORA
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">VISITE NOSSA LOJA</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Endereço</h4>
                    <p className="text-gray-600">Rua das Flores, 123 - Centro<br />São Paulo - SP, 01234-567</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Telefone</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 17h<br />
                      Domingo: 9h às 15h<br />
                      <strong>Dias 20 e 21/06: Até 20h</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nome completo" 
                  required 
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Telefone/WhatsApp" 
                  required 
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  required 
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
                <select 
                  required 
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                >
                  <option value="">Produto de interesse</option>
                  <option value="sofas">Sofás</option>
                  <option value="colchoes">Colchões</option>
                  <option value="ambos">Sofás e Colchões</option>
                </select>
                <textarea 
                  placeholder="Mensagem (opcional)" 
                  rows="4" 
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 rounded-xl"
                >
                  ENVIAR MENSAGEM
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Smart Móveis</h3>
              <p className="text-gray-300 mb-4">Transformando casas em lares há mais de 15 anos.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-sm font-bold">IG</span>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-sm font-bold">FB</span>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-sm font-bold">YT</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Informações</h4>
              <p className="text-gray-300 mb-2">CNPJ: 12.345.678/0001-90</p>
              <p className="text-gray-300 mb-4">Smart Móveis Ltda.</p>
              <small className="text-gray-400 block">*Consulte condições de entrega e montagem</small>
              <small className="text-gray-400 block">**Ofertas válidas apenas nos dias 20 e 21 de junho de 2024</small>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Smart Móveis. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

