"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const specifications = [
    { label: "Peso", value: "45g", icon: "⚖️" },
    { label: "Conectividad", value: "Bluetooth 5.2", icon: "📶" },
    { label: "Batería", value: "7 días de uso", icon: "🔋" },
    { label: "Carga", value: "Magnética USB-C", icon: "⚡" },
    { label: "Material", value: "Silicona médica", icon: "🏥" },
    { label: "Resistencia", value: "IPX4 (resistente al sudor)", icon: "💧" },
    { label: "Compatibilidad", value: "iOS 14+ / Android 8+", icon: "📱" },
    { label: "Garantía", value: "2 años", icon: "🛡️" },
]

const modes = [
    {
        name: "Modo Oficina",
        description: "Impulsos discretos para uso profesional",
        intensity: "Bajo",
        color: "#007AFF",
    },
    {
        name: "Modo Entrenamiento",
        description: "Corrección activa durante ejercicio",
        intensity: "Alto",
        color: "#FF9F0A",
    },
    {
        name: "Modo Relajación",
        description: "Recordatorios suaves para el hogar",
        intensity: "Medio",
        color: "#24C88B",
    },
]

export function SpecsSection() {
    return (
        <section className="py-20 bg-[#F4F5F7]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-light text-[#1C1C1E] mb-4">
                        Especificaciones <span className="font-medium text-[#007AFF]">técnicas</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Tecnología de vanguardia en un diseño compacto y elegante
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Technical Specs */}
                    <Card className="border-0 shadow-xl bg-white rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-2xl font-light text-[#1C1C1E]">Especificaciones del dispositivo</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                {specifications.map((spec, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{spec.icon}</span>
                                            <span className="font-medium text-[#1C1C1E]">{spec.label}</span>
                                        </div>
                                        <span className="text-gray-600 font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Usage Modes */}
                    <Card className="border-0 shadow-xl bg-white rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-2xl font-light text-[#1C1C1E]">Modos de uso personalizables</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {modes.map((mode, index) => (
                                    <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-lg font-medium text-[#1C1C1E]">{mode.name}</h3>
                                            <Badge
                                                variant="secondary"
                                                className="text-white font-medium"
                                                style={{ backgroundColor: mode.color }}
                                            >
                                                {mode.intensity}
                                            </Badge>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{mode.description}</p>
                                        <div className="mt-4 flex items-center gap-2">
                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="h-2 rounded-full transition-all duration-500"
                                                    style={{
                                                        backgroundColor: mode.color,
                                                        width: mode.intensity === "Bajo" ? "33%" : mode.intensity === "Medio" ? "66%" : "100%",
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-gray-500 font-medium">
                                                Intensidad {mode.intensity.toLowerCase()}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
