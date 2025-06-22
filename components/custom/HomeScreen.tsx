'use client'

import {
  Activity,
  Award,
  Clock,
  Flame,
  Footprints,
  Menu,
  Settings,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'

export function HomeScreen({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) {
  const [postureScore, setPostureScore] = useState(85)
  const [shockIntensity, setShockIntensity] = useState([3])
  const [isGoodPosture, setIsGoodPosture] = useState(true)
  const [steps, setSteps] = useState(8247)
  const [calories, setCalories] = useState(342)
  const [uprightTime, setUprightTime] = useState(6.2)
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

  return (
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
}
