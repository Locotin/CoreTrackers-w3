"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Clock, Target } from "lucide-react"

export function ProgressSection() {
    return (
        <section className="py-20 bg-[#F4F5F7]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-light text-[#1C1C1E] mb-4">
                        Seguimiento <span className="font-medium text-[#007AFF]">inteligente</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Visualiza tu progreso y mantente motivado con métricas detalladas
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-[#24C88B] to-[#007AFF] text-white p-8">
                            <CardTitle className="text-2xl font-light flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                Tu progreso semanal
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                {/* Daily Progress Ring */}
                                <div className="text-center">
                                    <div className="relative w-32 h-32 mx-auto mb-4">
                                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                                            <circle cx="60" cy="60" r="50" stroke="#f3f4f6" strokeWidth="8" fill="none" />
                                            <circle
                                                cx="60"
                                                cy="60"
                                                r="50"
                                                stroke="#24C88B"
                                                strokeWidth="8"
                                                fill="none"
                                                strokeDasharray={`${2 * Math.PI * 50}`}
                                                strokeDashoffset={`${2 * Math.PI * 50 * (1 - 0.85)}`}
                                                className="transition-all duration-1000 ease-out"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-[#24C88B]">85%</div>
                                                <div className="text-xs text-gray-500">Hoy</div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="font-medium text-[#1C1C1E] mb-1">Postura correcta</h3>
                                    <p className="text-sm text-gray-600">6.8 de 8 horas</p>
                                </div>

                                {/* Weekly Stats */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Clock className="h-5 w-5 text-[#007AFF]" />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm font-medium text-[#1C1C1E]">Tiempo activo</span>
                                                <span className="text-sm text-gray-600">47h esta semana</span>
                                            </div>
                                            <Progress value={78} className="h-2" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Target className="h-5 w-5 text-[#FF9F0A]" />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm font-medium text-[#1C1C1E]">Objetivos cumplidos</span>
                                                <span className="text-sm text-gray-600">6 de 7 días</span>
                                            </div>
                                            <Progress value={86} className="h-2" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <TrendingUp className="h-5 w-5 text-[#24C88B]" />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm font-medium text-[#1C1C1E]">Mejora semanal</span>
                                                <span className="text-sm text-gray-600">+12%</span>
                                            </div>
                                            <Progress value={92} className="h-2" />
                                        </div>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="space-y-3">
                                    <h3 className="font-medium text-[#1C1C1E] mb-3">Logros recientes</h3>
                                    <div className="flex items-center gap-3 p-3 bg-[#24C88B]/10 rounded-xl">
                                        <div className="w-8 h-8 bg-[#24C88B] rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs">🏆</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-[#1C1C1E]">Semana perfecta</div>
                                            <div className="text-xs text-gray-600">7 días consecutivos</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-[#007AFF]/10 rounded-xl">
                                        <div className="w-8 h-8 bg-[#007AFF] rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs">⚡</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-[#1C1C1E]">Racha de 30 días</div>
                                            <div className="text-xs text-gray-600">¡Sigue así!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Weekly Chart Mockup */}
                            <div className="border-t pt-8">
                                <h3 className="font-medium text-[#1C1C1E] mb-4">Progreso de los últimos 7 días</h3>
                                <div className="flex items-end justify-between h-32 gap-2">
                                    {[65, 72, 68, 85, 78, 92, 85].map((value, index) => (
                                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                            <div
                                                className="w-full bg-gradient-to-t from-[#24C88B] to-[#24C88B]/60 rounded-t-lg transition-all duration-1000 ease-out"
                                                style={{ height: `${value}%` }}
                                            ></div>
                                            <span className="text-xs text-gray-500">{["L", "M", "X", "J", "V", "S", "D"][index]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
