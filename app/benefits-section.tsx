"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const benefits = [
    {
        title: "Antes",
        description: "Postura encorvada y dolor de espalda constante",
        image: "/placeholder.svg?height=200&width=200",
        color: "#FF9F0A",
    },
    {
        title: "Durante",
        description: "Corrección suave en tiempo real sin interrupciones",
        image: "/placeholder.svg?height=200&width=200",
        color: "#007AFF",
    },
    {
        title: "Después",
        description: "Postura natural y saludable como nuevo hábito",
        image: "/placeholder.svg?height=200&width=200",
        color: "#24C88B",
    },
]

export function BenefitsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-light text-[#1C1C1E] mb-4">
                        Tu transformación <span className="font-medium text-[#24C88B]">postural</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Observa cómo mejora tu postura día a día con nuestro sistema inteligente
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <Card
                            key={index}
                            className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl group overflow-hidden"
                        >
                            <CardContent className="p-0">
                                <div className="relative">
                                    <div className="h-2 w-full" style={{ backgroundColor: benefit.color }}></div>
                                    <div className="p-8">
                                        <div className="relative mb-6">
                                            <div
                                                className="absolute inset-0 opacity-20 blur-2xl rounded-full"
                                                style={{ backgroundColor: benefit.color }}
                                            ></div>
                                            <Image
                                                src={benefit.image || "/placeholder.svg"}
                                                alt={benefit.title}
                                                width={200}
                                                height={200}
                                                className="relative z-10 mx-auto group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-medium mb-3 text-center" style={{ color: benefit.color }}>
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Progress indicator */}
                <div className="flex justify-center mt-12">
                    <div className="flex items-center gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center">
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: benefit.color }}></div>
                                {index < benefits.length - 1 && <div className="w-16 h-0.5 bg-gray-200 mx-4"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
