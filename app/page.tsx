"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Activity,
  BarChart3,
  User,
  Zap,
  Target,
  Footprints,
  Flame,
  Clock,
  TrendingUp,
  Award,
  Settings,
  Menu,
  X,
} from "lucide-react"
import BusinessModelGraph from "@/components/custom/BusinessModelGraph"

export default function PostureFitnessApp() {
  const [activeTab, setActiveTab] = useState("home")
  const [postureScore, setPostureScore] = useState(85)
  const [shockIntensity, setShockIntensity] = useState([3])
  const [isGoodPosture, setIsGoodPosture] = useState(true)
  const [steps, setSteps] = useState(8247)
  const [calories, setCalories] = useState(342)
  const [uprightTime, setUprightTime] = useState(6.2)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [screenSize, setScreenSize] = useState("default")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize("large")
      } else if (window.innerWidth >= 768) {
        setScreenSize("medium")
      } else {
        setScreenSize("default")
      }
    }

    handleResize() // Set initial size
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Simulate real-time posture changes
  useEffect(() => {
    const interval = setInterval(() => {
      const newScore = Math.floor(Math.random() * 40) + 60 // 60-100 range
      setPostureScore(newScore)
      setIsGoodPosture(newScore >= 80)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const PostureIndicator = ({ size = "default" }) => {
    const dimensions = size === "large" ? "w-64 h-64" : size === "medium" ? "w-48 h-48" : "w-32 h-32"
    const textSize = size === "large" ? "text-5xl" : size === "medium" ? "text-4xl" : "text-2xl"
    const circumference = 2 * Math.PI * 45
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (postureScore / 100) * circumference

    return (
      <div
        className={`relative ${dimensions} mx-auto transition-all duration-500 ${isGoodPosture ? "drop-shadow-[0_0_20px_rgba(36,200,139,0.3)]" : ""}`}
      >
        <svg className={`${dimensions} transform -rotate-90`} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="#F4F5F7" strokeWidth="8" fill="transparent" />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={isGoodPosture ? "#24C88B" : "#FF4444"}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className={`${textSize} font-light ${isGoodPosture ? "text-[#24C88B]" : "text-red-500"}`}>
            {postureScore}%
          </div>
          <div className="text-sm text-[#1C1C1E] opacity-60 mt-1">{isGoodPosture ? "Excelente" : "Mejorar"}</div>
        </div>
      </div>
    )
  }

  const WeeklyChart = ({ height = "h-32" }) => {
    const weekData = [65, 78, 82, 75, 88, 92, 85]
    const days = ["L", "M", "X", "J", "V", "S", "D"]

    return (
      <div className={`${height} flex items-end justify-between px-4`}>
        {weekData.map((value, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div
              className="w-6 bg-gradient-to-t from-[#24C88B] to-[#007AFF] rounded-full transition-all duration-500"
              style={{ height: `${(value / 100) * (height === "h-48" ? 120 : 80)}px` }}
            />
            <span className="text-xs text-[#1C1C1E] opacity-60">{days[index]}</span>
          </div>
        ))}
      </div>
    )
  }

  const StatCard = ({ icon: Icon, value, label, color, size = "default" }) => {
    const cardSize = size === "large" ? "p-6" : "p-4"
    const valueSize = size === "large" ? "text-3xl" : "text-xl"
    const iconSize = size === "large" ? "h-8 w-8" : "h-6 w-6"

    return (
      <Card className="border-0 shadow-sm bg-white rounded-2xl hover:shadow-md transition-shadow">
        <CardContent className={`${cardSize} text-center`}>
          <Icon className={`${iconSize} mx-auto mb-2`} style={{ color }} />
          <div className={`${valueSize} font-light text-[#1C1C1E]`}>{value}</div>
          <div className="text-xs text-[#1C1C1E] opacity-60">{label}</div>
        </CardContent>
      </Card>
    )
  }

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

  const HomeScreen = () => (
    <div className="space-y-6 pb-20 lg:pb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5 text-[#1C1C1E]" />
          </Button>
          <div>
            <h1 className="text-2xl lg:text-3xl font-light text-[#1C1C1E]">Hola, Ana</h1>
            <p className="text-sm text-[#1C1C1E] opacity-60">Mantén tu postura perfecta</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5 text-[#1C1C1E]" />
          </Button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Posture Indicator */}
          <Card className="border-0 shadow-sm bg-white rounded-3xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-medium text-[#1C1C1E] mb-2">Alineación de Espalda</h2>
                <Badge
                  variant="secondary"
                  className={`${isGoodPosture ? "bg-[#24C88B]/10 text-[#24C88B]" : "bg-red-50 text-red-600"} border-0`}
                >
                  {isGoodPosture ? "Postura Correcta" : "Corregir Postura"}
                </Badge>
              </div>
              {isClient && <PostureIndicator size={screenSize} />}
            </CardContent>
          </Card>

          {/* Shock Intensity */}
          <Card className="border-0 shadow-sm bg-white rounded-3xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-[#FF9F0A]" />
                <h3 className="text-lg font-medium text-[#1C1C1E]">Intensidad de Impulso</h3>
              </div>
              <div className="space-y-4">
                <Slider
                  value={shockIntensity}
                  onValueChange={setShockIntensity}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-[#1C1C1E] opacity-60">
                  <span>Suave</span>
                  <span className="font-medium text-[#007AFF]">Nivel {shockIntensity[0]}</span>
                  <span>Intenso</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Daily Stats */}
          <div className="grid grid-cols-1 gap-4">
            <StatCard icon={Footprints} value={steps} label="pasos" color="#007AFF" size="large" />
            <StatCard icon={Flame} value={calories} label="kcal" color="#FF9F0A" size="large" />
            <StatCard icon={Clock} value={`${uprightTime}h`} label="erguido" color="#24C88B" size="large" />
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 gap-4">
            <Button className="h-16 bg-[#24C88B] hover:bg-[#24C88B]/90 text-white rounded-2xl font-normal text-lg">
              <Target className="h-6 w-6 mr-3" />
              Iniciar Sesión
            </Button>
            <Button variant="outline" className="h-16 border-[#007AFF] text-[#007AFF] rounded-2xl font-normal text-lg">
              <Activity className="h-6 w-6 mr-3" />
              Ejercicios
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Weekly Progress */}
          <Card className="border-0 shadow-sm bg-white rounded-3xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium text-[#1C1C1E]">Progreso Semanal</h3>
                <TrendingUp className="h-6 w-6 text-[#24C88B]" />
              </div>
              <WeeklyChart height="h-48" />
              <div className="mt-6 text-center">
                <span className="text-sm text-[#1C1C1E] opacity-60">Promedio: </span>
                <span className="text-lg font-medium text-[#24C88B]">81% postura correcta</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="border-0 shadow-sm bg-white rounded-3xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-[#FF9F0A]" />
                <h3 className="text-lg font-medium text-[#1C1C1E]">Logros Recientes</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Semana Perfecta", desc: "7 días con postura excelente" },
                  { name: "Madrugador", desc: "Sesión matutina 5 días seguidos" },
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-[#24C88B]/10">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#24C88B]">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-[#1C1C1E]">{achievement.name}</div>
                      <div className="text-sm text-[#1C1C1E] opacity-60">{achievement.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden space-y-6">
        {/* Posture Indicator */}
        <Card className="border-0 shadow-sm bg-white rounded-3xl">
          <CardContent className="p-6 md:p-8">
            <div className="text-center mb-6">
              <h2 className="text-lg md:text-xl font-medium text-[#1C1C1E] mb-2">Alineación de Espalda</h2>
              <Badge
                variant="secondary"
                className={`${isGoodPosture ? "bg-[#24C88B]/10 text-[#24C88B]" : "bg-red-50 text-red-600"} border-0`}
              >
                {isGoodPosture ? "Postura Correcta" : "Corregir Postura"}
              </Badge>
            </div>
            {isClient && <PostureIndicator size={screenSize} />}
          </CardContent>
        </Card>

        {/* Daily Stats */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          <StatCard icon={Footprints} value={steps} label="pasos" color="#007AFF" />
          <StatCard icon={Flame} value={calories} label="kcal" color="#FF9F0A" />
          <StatCard icon={Clock} value={`${uprightTime}h`} label="erguido" color="#24C88B" />
        </div>

        {/* Tablet: Two Column Layout */}
        <div className="md:grid md:grid-cols-2 md:gap-6 space-y-6 md:space-y-0">
          {/* Shock Intensity */}
          <Card className="border-0 shadow-sm bg-white rounded-3xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-5 w-5 text-[#FF9F0A]" />
                <h3 className="text-lg font-medium text-[#1C1C1E]">Intensidad de Impulso</h3>
              </div>
              <div className="space-y-4">
                <Slider
                  value={shockIntensity}
                  onValueChange={setShockIntensity}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-[#1C1C1E] opacity-60">
                  <span>Suave</span>
                  <span className="font-medium text-[#007AFF]">Nivel {shockIntensity[0]}</span>
                  <span>Intenso</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Progress */}
          <Card className="border-0 shadow-sm bg-white rounded-3xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-[#1C1C1E]">Progreso Semanal</h3>
                <TrendingUp className="h-5 w-5 text-[#24C88B]" />
              </div>
              <WeeklyChart />
              <div className="mt-4 text-center">
                <span className="text-sm text-[#1C1C1E] opacity-60">Promedio: </span>
                <span className="text-sm font-medium text-[#24C88B]">81% postura correcta</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button className="h-14 bg-[#24C88B] hover:bg-[#24C88B]/90 text-white rounded-2xl font-normal">
            <Target className="h-5 w-5 mr-2" />
            Iniciar Sesión
          </Button>
          <Button variant="outline" className="h-14 border-[#007AFF] text-[#007AFF] rounded-2xl font-normal">
            <Activity className="h-5 w-5 mr-2" />
            Ejercicios
          </Button>
        </div>
      </div>
    </div>
  )

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
    const satisfactionLevels = ["medium", "medium", "medium", "low", "high", "high", "medium", "high", "high"];
    const satisfactionColors = {
      high: 'rgba(34, 197, 94, 0.2)',
      medium: 'rgba(234, 179, 8, 0.2)',
      low: 'rgba(239, 68, 68, 0.2)'
    };
    const gradientStops = satisfactionLevels
      .map((level, index) => `${satisfactionColors[level]} ${(100 / (satisfactionLevels.length - 1)) * index}%`)
      .join(', ');
    const gradientStyle = { backgroundImage: `linear-gradient(to right, ${gradientStops})` };

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

        {/* Business Model Section */}
        <section className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#1C1C1E] mb-4">Nuestro Modelo de Negocio</h3>
          <BusinessModelGraph />
        </section>
      </div>
    )
  }

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />
      case "sessions":
        return <SessionsScreen />
      case "stats":
        return <StatsScreen />
      case "profile":
        return <ProfileScreen />
      case "about":
        return <AboutScreen />
      default:
        return <HomeScreen />
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
