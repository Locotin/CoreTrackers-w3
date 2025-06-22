"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Activity,
  BarChart3,
  User,
  Settings,
  Menu,
  X,
  Award,
} from "lucide-react"
import { BusinessModelDiagram } from "@/components/custom/BusinessModelDiagram"
import { HomeScreen } from "@/components/custom/HomeScreen"

export default function PostureFitnessApp() {
  const [activeTab, setActiveTab] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const Sidebar = () => {
    const navItems = [
      { id: "home", icon: Home, label: "Inicio" },
      { id: "sessions", icon: Activity, label: "Sesiones" },
      { id: "stats", icon: BarChart3, label: "Estadísticas" },
      { id: "profile", icon: User, label: "Perfil" },
      { id: "about", icon: Award, label: "Sobre Nosotros" },
    ]

    return (
      <>
        {/* Overlay for all screen sizes */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-all duration-500 ease-in-out backdrop-blur-sm ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar/Navbar */}
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className={`flex flex-col h-full`}>
            {/* Header */}
            <div className={`p-6 border-b border-gray-100 bg-gradient-to-r from-[#24C88B]/10 to-[#007AFF]/10`}>
              <div className="flex items-center justify-between">
                <h1 className={`text-xl font-semibold text-[#1C1C1E] hover:scale-105`}>CoreTrackers</h1>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setSidebarOpen(false)}
                  className={`rounded-full hover:bg-red-100 hover:text-red-600 transition-all duration-300 hover:scale-110`}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className={`flex-1 p-4`}>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveTab(item.id)
                        setSidebarOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
                        activeTab === item.id
                          ? "bg-gradient-to-r from-[#24C88B] to-[#007AFF] text-white shadow-lg scale-105"
                          : "text-[#1C1C1E] opacity-60 hover:opacity-100 hover:bg-gradient-to-r hover:from-[#24C88B]/10 hover:to-[#007AFF]/10"
                      }`}
                    >
                      <item.icon className={`h-5 w-5 transition-all duration-300 ${
                        activeTab === item.id ? 'animate-pulse' : 'hover:scale-110'
                      }`} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className={`p-4 border-t border-gray-100 bg-gradient-to-r from-[#24C88B]/5 to-[#007AFF]/5`}>
              <div className="text-center">
                <p className={`text-xs text-[#1C1C1E] opacity-40 hover:opacity-60 transition-opacity duration-300`}>CoreTrackers v1.0</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const MobileBottomNav = () => {
    const navItems = [
      { id: "home", icon: Home, label: "Inicio" },
      { id: "sessions", icon: Activity, label: "Sesiones" },
      { id: "stats", icon: BarChart3, label: "Estadísticas" },
      { id: "profile", icon: User, label: "Perfil" },
      { id: "about", icon: Award, label: "Nosotros" },
    ]

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 lg:hidden z-30">
        <div className="flex items-center justify-around py-2">
          {navItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all duration-200 ${
                activeTab === tab.id ? "text-[#24C88B] bg-[#24C88B]/10" : "text-[#1C1C1E] opacity-60 hover:opacity-100"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const SessionsScreen = () => (
    <div className="space-y-6 pb-20 lg:pb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5 text-[#1C1C1E]" />
          </Button>
          <h1 className="text-2xl lg:text-3xl font-light text-[#1C1C1E]">Sesiones de Entrenamiento</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {[
          { name: "Estiramiento Matutino", duration: "5 min", difficulty: "Fácil", icon: "🌅", color: "#24C88B" },
          { name: "Break de Oficina", duration: "3 min", difficulty: "Fácil", icon: "💼", color: "#007AFF" },
          { name: "Fortalecimiento Espalda", duration: "15 min", difficulty: "Medio", icon: "💪", color: "#FF9F0A" },
          { name: "Relajación Nocturna", duration: "10 min", difficulty: "Fácil", icon: "🌙", color: "#24C88B" },
          { name: "Yoga para Postura", duration: "20 min", difficulty: "Medio", icon: "🧘", color: "#007AFF" },
          { name: "Ejercicios de Cuello", duration: "8 min", difficulty: "Fácil", icon: "🎯", color: "#FF9F0A" },
        ].map((session, index) => (
          <Card key={index} className="border-0 shadow-sm bg-white rounded-2xl hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{session.icon}</div>
                <h3 className="font-medium text-[#1C1C1E] mb-2">{session.name}</h3>
                <div className="flex justify-center gap-3 mb-4">
                  <span className="text-sm text-[#1C1C1E] opacity-60">{session.duration}</span>
                  <Badge
                    variant="secondary"
                    style={{ backgroundColor: `${session.color}15`, color: session.color }}
                    className="border-0 text-xs"
                  >
                    {session.difficulty}
                  </Badge>
                </div>
              </div>
              <Button className="w-full bg-[#24C88B] hover:bg-[#24C88B]/90 text-white rounded-xl">
                Iniciar Sesión
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const StatsScreen = () => (
    <div className="space-y-6 pb-20 lg:pb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5 text-[#1C1C1E]" />
          </Button>
          <h1 className="text-2xl lg:text-3xl font-light text-[#1C1C1E]">Estadísticas</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Overview */}
        <Card className="border-0 shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6 lg:p-8">
            <h3 className="text-xl font-medium text-[#1C1C1E] mb-6">Resumen Mensual</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-[#24C88B] mb-2">23</div>
                <div className="text-sm text-[#1C1C1E] opacity-60">días perfectos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-[#FF9F0A] mb-2">147</div>
                <div className="text-sm text-[#1C1C1E] opacity-60">correcciones</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="border-0 shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-[#FF9F0A]" />
              <h3 className="text-xl font-medium text-[#1C1C1E]">Logros</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "Semana Perfecta", desc: "7 días con postura excelente", earned: true },
                { name: "Madrugador", desc: "Sesión matutina 5 días seguidos", earned: true },
                { name: "Constancia", desc: "30 días usando el dispositivo", earned: false },
                { name: "Experto", desc: "100 sesiones completadas", earned: false },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl ${achievement.earned ? "bg-[#24C88B]/10" : "bg-gray-50"}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${achievement.earned ? "bg-[#24C88B]" : "bg-gray-300"}`}
                  >
                    <Award className={`h-5 w-5 ${achievement.earned ? "text-white" : "text-gray-500"}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`font-medium ${achievement.earned ? "text-[#1C1C1E]" : "text-gray-500"}`}>
                      {achievement.name}
                    </div>
                    <div className="text-sm text-[#1C1C1E] opacity-60">{achievement.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Extended Stats for Desktop */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6">
        <StatCard icon={Target} value="94%" label="precisión semanal" color="#24C88B" size="large" />
        <StatCard icon={TrendingUp} value="+12%" label="mejora mensual" color="#007AFF" size="large" />
        <StatCard icon={Zap} value="1,247" label="impulsos totales" color="#FF9F0A" size="large" />
      </div>
    </div>
  )

  const ProfileScreen = () => (
    <div className="space-y-6 pb-20 lg:pb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5 text-[#1C1C1E]" />
          </Button>
          <h1 className="text-2xl lg:text-3xl font-light text-[#1C1C1E]">Perfil</h1>
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-[#24C88B] rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-12 w-12 text-white" />
        </div>
        <h2 className="text-2xl font-medium text-[#1C1C1E]">Ana García</h2>
        <p className="text-sm text-[#1C1C1E] opacity-60">Miembro desde Enero 2024</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {[
          { name: "Objetivos Diarios", icon: Target, color: "#24C88B" },
          { name: "Configuración del Dispositivo", icon: Settings, color: "#007AFF" },
          { name: "Integración con Salud", icon: Activity, color: "#FF9F0A" },
          { name: "Notificaciones", icon: Zap, color: "#007AFF" },
          { name: "Historial de Sesiones", icon: BarChart3, color: "#24C88B" },
          { name: "Soporte Técnico", icon: Settings, color: "#FF9F0A" },
        ].map((item, index) => (
          <Card
            key={index}
            className="border-0 shadow-sm bg-white rounded-2xl hover:shadow-md transition-shadow cursor-pointer"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="h-6 w-6" style={{ color: item.color }} />
                </div>
                <span className="flex-1 font-medium text-[#1C1C1E]">{item.name}</span>
                <div className="w-2 h-2 rounded-full bg-[#1C1C1E] opacity-30" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const AboutScreen = () => {
    return (
      <div className="space-y-6 pb-20 lg:pb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5 text-[#1C1C1E]" />
            </Button>
            <h1 className="text-2xl lg:text-3xl font-light text-[#1C1C1E]">Sobre Nosotros</h1>
          </div>
        </div>

        {/* Team Section */}
        <Card className="border-0 shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6 lg:p-8">
            <h2 className="text-2xl font-medium text-[#1C1C1E] mb-6 text-center">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Angel Sierra",
                  role: "Ingeniero de Sistemas",
                  avatar: "👨‍💻"
                },
                {
                  name: "Jonathan Velosa",
                  role: "Ingeniero de Sistemas",
                  avatar: "👨‍💻"
                },
                {
                  name: "Julian Galeano",
                  role: "Ingeniero Industrial",
                  avatar: "👨‍🏭"
                }
              ].map((member, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#24C88B]/10 to-[#007AFF]/10">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-medium text-[#1C1C1E] mb-2">{member.name}</h3>
                  <p className="text-sm text-[#007AFF] font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Types */}
        <Card className="border-0 shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6 lg:p-8">
            <h2 className="text-2xl font-medium text-[#1C1C1E] mb-6 text-center">Nuestros Usuarios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  type: "Home Office",
                  icon: "💼",
                  description: "Personas que pasan largas horas sentadas frente a la computadora.",
                  benefits: ["Prevención de dolor", "Mejora de productividad", "Bienestar laboral"]
                },
                {
                  type: "Deportistas",
                  icon: "🏃",
                  description: "Atletas que buscan optimizar su rendimiento y prevenir lesiones.",
                  benefits: ["Mejora de técnica", "Prevención de lesiones", "Recuperación acelerada"]
                },
                {
                  type: "Estudiantes",
                  icon: "📚",
                  description: "Jóvenes que estudian por largas horas en posiciones estáticas.",
                  benefits: ["Buenos hábitos", "Prevención temprana", "Mejor concentración"]
                },
                {
                  type: "Adulto Mayor",
                  icon: "👴",
                  description: "Adultos que buscan mantener su movilidad y salud postural.",
                  benefits: ["Prevención de caídas", "Independencia", "Calidad de vida"]
                }
              ].map((userType, index) => (
                <div key={index} className="p-6 rounded-2xl border border-[#24C88B]/20 h-full flex flex-col">
                  <div className="text-4xl mb-4">{userType.icon}</div>
                  <h3 className="text-lg font-medium text-[#1C1C1E] mb-3">{userType.type}</h3>
                  <p className="text-sm text-[#1C1C1E] opacity-70 mb-4 flex-grow">{userType.description}</p>
                  <ul className="space-y-2">
                    {userType.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-[#24C88B] flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#24C88B]"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Business Model Canvas */}
        <Card className="border-0 shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6 lg:p-8">
            <h2 className="text-2xl font-medium text-[#1C1C1E] mb-6">Modelo de Negocio</h2>
            <BusinessModelDiagram />
          </CardContent>
        </Card>

        {/* Expert Quotes */}
        <Card className="border-0 shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6 lg:p-8">
            <h2 className="text-2xl font-medium text-[#1C1C1E] mb-6 text-center">Aprobación de Expertos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote: "La tecnología de CoreTrackers representa un avance significativo en la prevención de problemas posturales. Su enfoque proactivo puede reducir significativamente los costos de salud laboral.",
                  author: "Dr. María Elena Sánchez",
                  title: "Especialista en Medicina del Trabajo",
                  organization: "Hospital Universitario de Madrid"
                },
                {
                  quote: "Como fisioterapeuta, veo el potencial de este dispositivo para complementar la terapia tradicional. La retroalimentación en tiempo real es invaluable para el paciente.",
                  author: "Lic. Roberto Jiménez",
                  title: "Fisioterapeuta Especialista",
                  organization: "Clínica de Rehabilitación Integral"
                },
                {
                  quote: "La integración de IoT con salud preventiva es el futuro. CoreTrackers está en la vanguardia de esta revolución tecnológica.",
                  author: "Ing. Patricia Morales",
                  title: "Directora de Innovación Tecnológica",
                  organization: "Instituto de Tecnología Avanzada"
                },
                {
                  quote: "Los datos muestran que el 70% de los problemas de espalda se pueden prevenir. Esta solución tecnológica puede cambiar las estadísticas.",
                  author: "Dr. Alejandro Torres",
                  title: "Investigador en Biomecánica",
                  organization: "Universidad Nacional de Ciencias de la Salud"
                }
              ].map((expert, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-[#24C88B]/5 border border-[#24C88B]/10">
                  <div className="text-2xl text-[#24C88B] mb-4">"</div>
                  <p className="text-sm text-[#1C1C1E] mb-4 italic">{expert.quote}</p>
                  <div className="border-t border-[#24C88B]/20 pt-4">
                    <p className="font-medium text-[#1C1C1E] text-sm">{expert.author}</p>
                    <p className="text-xs text-[#007AFF]">{expert.title}</p>
                    <p className="text-xs text-[#1C1C1E] opacity-60">{expert.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Blueprint Section */}
        <Card className="border-0 shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6 lg:p-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">👕</div>
              <h2 className="text-2xl font-medium text-[#1C1C1E] mb-2">Blueprint</h2>
              <h3 className="text-lg text-[#007AFF] mb-4">Camiseta de Postura Inteligente</h3>
              <p className="text-sm text-[#1C1C1E] opacity-70">Mejorar la postura corporal mediante tecnología wearable</p>
            </div>

            {/* Journey Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                {/* Table Header */}
                <thead>
                  <tr>
                    <th className="bg-gradient-to-r from-[#24C88B] to-[#007AFF] text-white p-2 text-left rounded-l-lg w-[120px]">
                      Etapas del Journey
                    </th>
                    <th colSpan={9} className="bg-gradient-to-r from-[#007AFF] via-[#24C88B] to-[#007AFF] text-white p-2 text-center text-xs font-medium">
                      <div className="flex justify-between items-center">
                        {[
                          "Descubrimiento", "Investigación", "Compra", "Envío", 
                          "Recepción", "Primera Prueba", "Registro", "Uso Diario", "Adaptación"
                        ].map((phase, index) => (
                          <span key={index} className="flex-1 text-center">
                            {phase}
                          </span>
                        ))}
                      </div>
                    </th>
                  </tr>
                </thead>
                
                <tbody>
                  {/* Necesidades Row */}
                  <tr className="bg-green-50">
                    <td className="p-2 border border-gray-200 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs">💡</div>
                        <div>
                          <div className="font-medium text-[#1C1C1E] text-xs">Necesidades</div>
                          <div className="text-xs text-[#1C1C1E] opacity-60">¿Qué necesita?</div>
                        </div>
                      </div>
                    </td>
                    {[
                      "Solución para dolor de espalda",
                      "Información confiable",
                      "Compra fácil y segura",
                      "Seguimiento",
                      "Producto correcto",
                      "Funcionamiento",
                      "Configuración simple",
                      "Recordatorios",
                      "Formar hábito"
                    ].map((need, index) => (
                      <td key={index} className="p-2 border border-gray-200 text-[#1C1C1E] bg-white text-xs">
                        {need}
                      </td>
                    ))}
                  </tr>

                  {/* Touchpoints Row */}
                  <tr className="bg-pink-50">
                    <td className="p-2 border border-gray-200 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center text-white text-xs">📱</div>
                        <div>
                          <div className="font-medium text-[#1C1C1E] text-xs">Touchpoints</div>
                          <div className="text-xs text-[#1C1C1E] opacity-60">Contacto</div>
                        </div>
                      </div>
                    </td>
                    {[
                      "TV/Online",
                      "Redes sociales",
                      "E-commerce",
                      "Email/SMS",
                      "Packaging",
                      "Manual",
                      "App móvil",
                      "App + camiseta",
                      "Notificaciones"
                    ].map((touchpoint, index) => (
                      <td key={index} className="p-2 border border-gray-200 text-[#1C1C1E] bg-white text-xs">
                        {touchpoint}
                      </td>
                    ))}
                  </tr>

                  {/* Actividades Row */}
                  <tr className="bg-orange-50">
                    <td className="p-2 border border-gray-200 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs">⚡</div>
                        <div>
                          <div className="font-medium text-[#1C1C1E] text-xs">Actividades</div>
                          <div className="text-xs text-[#1C1C1E] opacity-60">Acciones</div>
                        </div>
                      </div>
                    </td>
                    {[
                      "Se entera del producto",
                      "Se interesa en el producto",
                      "Realiza pago",
                      "Espera entrega",
                      "Desempaca",
                      "Se coloca camiseta",
                      "Descarga app",
                      "Usa diariamente",
                      "Integra rutina"
                    ].map((activity, index) => (
                      <td key={index} className="p-2 border border-gray-200 text-[#1C1C1E] bg-white text-xs">
                        {activity}
                      </td>
                    ))}
                  </tr>

                  {/* Usuario 1 - Home Office */}
                  <tr className="bg-purple-50">
                    <td className="p-2 border border-gray-200 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white text-xs">👤</div>
                        <div>
                          <div className="font-medium text-[#1C1C1E] text-xs">Home Office</div>
                          <div className="text-xs text-[#1C1C1E] opacity-60">Usuario</div>
                        </div>
                      </div>
                    </td>
                    {[
                      "Busca solución",
                      "Investiga online",
                      "Compra desde casa",
                      "Ansioso por recibir",
                      "Prueba inmediatamente",
                      "Evalúa comodidad",
                      "Configura trabajo",
                      "Usa 8+ horas",
                      "Nota mejoras"
                    ].map((behavior, index) => (
                      <td key={index} className="p-2 border border-gray-200 text-[#1C1C1E] bg-white text-xs">
                        {behavior}
                      </td>
                    ))}
                  </tr>

                  {/* Usuario 2 - Deportista */}
                  <tr className="bg-blue-50">
                    <td className="p-2 border border-gray-200 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs">🏃</div>
                        <div>
                          <div className="font-medium text-[#1C1C1E] text-xs">Deportista</div>
                          <div className="text-xs text-[#1C1C1E] opacity-60">Usuario</div>
                        </div>
                      </div>
                    </td>
                    {[
                      "Ve en redes",
                      "Busca testimonios",
                      "Compra para entrenar",
                      "Quiere usar pronto",
                      "Prueba ejercicio",
                      "Verifica función",
                      "Sincroniza apps",
                      "Usa entrenamientos",
                      "Integra deporte"
                    ].map((behavior, index) => (
                      <td key={index} className="p-2 border border-gray-200 text-[#1C1C1E] bg-white text-xs">
                        {behavior}
                      </td>
                    ))}
                  </tr>

                  {/* Usuario 3 - Estudiante */}
                  <tr className="bg-green-50">
                    <td className="p-2 border border-gray-200 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs">🎓</div>
                        <div>
                          <div className="font-medium text-[#1C1C1E] text-xs">Estudiante</div>
                          <div className="text-xs text-[#1C1C1E] opacity-60">Usuario</div>
                        </div>
                      </div>
                    </td>
                    {[
                      "Recomendación padres",
                      "Compara precios",
                      "Compra limitado",
                      "Espera paciente",
                      "Emocionado tecnología",
                      "Prueba estudiando",
                      "Explora funciones",
                      "Usa clases/estudio",
                      "Forma hábitos"
                    ].map((behavior, index) => (
                      <td key={index} className="p-2 border border-gray-200 text-[#1C1C1E] bg-white text-xs">
                        {behavior}
                      </td>
                    ))}
                  </tr>

                  {/* Usuario 4 - Adulto Mayor */}
                  <tr className="bg-amber-50">
                    <td className="p-2 border border-gray-200 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-amber-600 rounded flex items-center justify-center text-white text-xs">👴</div>
                        <div>
                          <div className="font-medium text-[#1C1C1E] text-xs">Adulto Mayor</div>
                          <div className="text-xs text-[#1C1C1E] opacity-60">Usuario</div>
                        </div>
                      </div>
                    </td>
                    {[
                      "Escucha radio/TV",
                      "Consulta familia",
                      "Llama para comprar",
                      "Espera expectativa",
                      "Necesita ayuda",
                      "Evalúa comodidad",
                      "Pide ayuda registro",
                      "Uso gradual",
                      "Aprecia mejoras"
                    ].map((behavior, index) => (
                      <td key={index} className="p-2 border border-gray-200 text-[#1C1C1E] bg-white text-xs">
                        {behavior}
                      </td>
                    ))}
                  </tr>

                  {/* Nivel de Satisfacción */}
                  <tr style={{ backgroundImage: 'linear-gradient(to right, rgba(234, 179, 8, 0.2) 0%, rgba(234, 179, 8, 0.2) 12.5%, rgba(234, 179, 8, 0.2) 25%, rgba(239, 68, 68, 0.2) 37.5%, rgba(34, 197, 94, 0.2) 50%, rgba(34, 197, 94, 0.2) 62.5%, rgba(234, 179, 8, 0.2) 75%, rgba(34, 197, 94, 0.2) 87.5%, rgba(34, 197, 94, 0.2) 100%)' }}>
                    <td className="p-2 border border-gray-200 font-medium bg-cyan-50">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center text-white text-xs">😊</div>
                        <div>
                          <div className="font-medium text-[#1C1C1E] text-xs">Satisfacción</div>
                        </div>
                      </div>
                    </td>
                    {[ "medium", "medium", "medium", "low", "high", "high", "medium", "high", "high"].map((level, index) => (
                      <td key={index} className="p-2 border border-gray-200 text-center bg-transparent">
                        <div className="flex justify-center">
                          <div className={`text-lg transition-transform duration-300 ${
                            level === 'high' ? 'hover:scale-125' : 
                            level === 'medium' ? 'hover:scale-110' : 'hover:scale-110'
                          }`}>
                            {level === 'high' ? '😊' : 
                             level === 'medium' ? '😐' : '😞'}
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Insights */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#24C88B]/10 to-[#007AFF]/10 rounded-2xl">
              <h4 className="font-medium text-[#1C1C1E] mb-4">Insights Clave:</h4>
              <ul className="space-y-2 text-sm text-[#1C1C1E]">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#24C88B] mt-2 flex-shrink-0"></div>
                  <span>El envío es el punto más crítico (baja satisfacción) - oportunidad de mejora</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#24C88B] mt-2 flex-shrink-0"></div>
                  <span>La recepción y primera prueba generan alta satisfacción - mantener expectativas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#24C88B] mt-2 flex-shrink-0"></div>
                  <span>El registro puede ser complejo para adultos mayores - simplificar proceso</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#24C88B] mt-2 flex-shrink-0"></div>
                  <span>El uso diario y adaptación son clave para retención a largo plazo</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen setSidebarOpen={setSidebarOpen} />
      case "sessions":
        return <SessionsScreen />
      case "stats":
        return <StatsScreen />
      case "profile":
        return <ProfileScreen />
      case "about":
        return <AboutScreen />
      default:
        return <HomeScreen setSidebarOpen={setSidebarOpen} />
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F5F7] relative overflow-x-hidden">
      <Sidebar />
      
      {/* Main Content */}
      <div className={`flex-1 transform transition-all duration-500 ease-in-out ${
        sidebarOpen ? 'translate-x-64' : 'translate-x-0'
      }`}>
        <div className="p-4 md:p-6 lg:p-8 pt-6 md:pt-8 lg:pt-12 max-w-7xl mx-auto">{renderScreen()}</div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  )
}
