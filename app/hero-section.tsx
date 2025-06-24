"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Truck, Shield, Clock, MapPin } from "lucide-react"
import Image from "next/image"

const sizes = [
    { id: "s", label: "S", description: "50-65 kg", available: true },
    { id: "m", label: "M", description: "65-80 kg", available: true },
    { id: "l", label: "L", description: "80-95 kg", available: true },
    { id: "xl", label: "XL", description: "95+ kg", available: false },
]

const colors = [
    { id: "black", name: "Negro", hex: "#1C1C1E", available: true },
    { id: "white", name: "Blanco", hex: "#FFFFFF", available: true },
    { id: "gray", name: "Gris", hex: "#8E8E93", available: true },
]

export function HeroSection() {
    const [selectedSize, setSelectedSize] = useState("m")
    const [selectedColor, setSelectedColor] = useState("black")
    const [quantity, setQuantity] = useState(1)
    const [isFavorite, setIsFavorite] = useState(false)

    const originalPrice = 109200
    const discount = 25

    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Product Image */}
                    <div className="relative">
                        <div className="sticky top-8">
                            <div className="relative bg-gradient-to-br from-[#F4F5F7] to-white rounded-3xl p-8 shadow-lg">
                                <div className="absolute top-4 right-4">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-gray-400 hover:text-[#FF9F0A]"
                                        onClick={() => setIsFavorite(!isFavorite)}
                                    >
                                        <Heart className={`h-6 w-6 ${isFavorite ? "fill-[#FF9F0A] text-[#FF9F0A]" : ""}`} />
                                    </Button>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#24C88B] opacity-20 blur-3xl rounded-full transform scale-75"></div>
                                    <Image
                                        src="/placeholder.svg?height=500&width=400"
                                        alt="Corrector de Postura Smart"
                                        width={400}
                                        height={500}
                                        className="relative z-10 mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Product Status */}
                        <div className="flex items-center gap-4 text-sm">
                            <span className="text-gray-600">Nuevo</span>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-600">+2000 vendidos</span>
                        </div>

                        {/* Title */}
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-light text-[#1C1C1E] leading-tight mb-2">
                                Corrector de Postura Smart Pro
                                <br />
                                <span className="text-xl text-gray-600">Detección IA + Impulsos Suaves</span>
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mt-3">
                                <span className="text-lg font-medium text-[#1C1C1E]">4.8</span>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < 5 ? "fill-[#FF9F0A] text-[#FF9F0A]" : "fill-gray-200 text-gray-200"}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-500">(324)</span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-400 line-through text-lg">${originalPrice}</span>
                                <Badge className="bg-[#24C88B] text-white">{discount}% OFF</Badge>
                            </div>
                            <div className="text-4xl font-light text-[#1C1C1E]">$90.999</div>
                            <div className="text-[#24C88B] font-medium">en 12 cuotas de €{Math.round(199 / 12)} sin interés</div>
                            <button className="text-[#007AFF] text-sm hover:underline">Ver los medios de pago</button>
                        </div>

                        {/* Color Selection */}
                        <div className="space-y-3">
                            <h3 className="font-medium text-[#1C1C1E]">Color: {colors.find((c) => c.id === selectedColor)?.name}</h3>
                            <div className="flex gap-3">
                                {colors.map((color) => (
                                    <button
                                        key={color.id}
                                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 ${selectedColor === color.id
                                            ? "border-[#24C88B] shadow-lg scale-110"
                                            : "border-gray-200 hover:border-gray-300"
                                            } ${!color.available ? "opacity-50 cursor-not-allowed" : ""}`}
                                        style={{ backgroundColor: color.hex }}
                                        onClick={() => color.available && setSelectedColor(color.id)}
                                        disabled={!color.available}
                                    >
                                        {color.hex === "#FFFFFF" && <div className="w-full h-full rounded-lg border border-gray-200"></div>}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="space-y-3">
                            <h3 className="font-medium text-[#1C1C1E]">Talla: {sizes.find((s) => s.id === selectedSize)?.label}</h3>
                            <div className="grid grid-cols-4 gap-3">
                                {sizes.map((size) => (
                                    <button
                                        key={size.id}
                                        className={`p-3 rounded-xl border-2 text-center transition-all duration-200 ${selectedSize === size.id
                                            ? "border-[#24C88B] bg-[#24C88B]/10 text-[#24C88B]"
                                            : "border-gray-200 hover:border-gray-300"
                                            } ${!size.available ? "opacity-50 cursor-not-allowed" : ""}`}
                                        onClick={() => size.available && setSelectedSize(size.id)}
                                        disabled={!size.available}
                                    >
                                        <div className="font-medium">{size.label}</div>
                                        <div className="text-xs text-gray-500">{size.description}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Stock and Quantity */}
                        <div className="flex items-center justify-between">
                            <div className="text-[#24C88B] font-medium">Stock disponible</div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-600">Cantidad:</span>
                                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                                    <SelectTrigger className="w-20">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <SelectItem key={num} value={num.toString()}>
                                                {num}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <span className="text-sm text-gray-500">(+50 disponibles)</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <Button
                                size="lg"
                                className="w-full bg-[#007AFF] hover:bg-[#0056b3] text-white py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105"
                            >
                                Comprar ahora
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF] hover:text-white py-4 rounded-xl font-medium text-lg transition-all duration-300"
                            >
                                Agregar al carrito
                            </Button>
                        </div>

                        {/* Shipping Info */}
                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            <div className="flex items-start gap-3">
                                <Truck className="h-5 w-5 text-[#24C88B] mt-0.5" />
                                <div>
                                    <div className="font-medium text-[#24C88B]">Llega gratis mañana</div>
                                    <div className="text-sm text-gray-600">Comprando dentro de las próximas 5 h 16 min</div>
                                    <button className="text-[#007AFF] text-sm hover:underline">Más formas de entrega</button>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-[#007AFF] mt-0.5" />
                                <div>
                                    <div className="font-medium text-[#1C1C1E]">Retira gratis a partir de mañana</div>
                                    <div className="text-sm text-gray-600">en una agencia de Correos</div>
                                    <button className="text-[#007AFF] text-sm hover:underline">Ver en el mapa</button>
                                </div>
                            </div>

                            <Card className="border-[#24C88B]/20 bg-[#24C88B]/5">
                                <CardContent className="p-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#24C88B] rounded-full flex items-center justify-center">
                                            <Shield className="h-4 w-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-[#1C1C1E]">Consigue envío gratis</div>
                                            <div className="text-sm text-gray-600">
                                                armando un carrito de €60.000 en productos y recíbelos gratis.
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-[#24C88B]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                                    <Truck className="h-6 w-6 text-[#24C88B]" />
                                </div>
                                <div className="text-sm font-medium text-[#1C1C1E]">Envío gratis</div>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-[#007AFF]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                                    <Clock className="h-6 w-6 text-[#007AFF]" />
                                </div>
                                <div className="text-sm font-medium text-[#1C1C1E]">30 días prueba</div>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-[#FF9F0A]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                                    <Shield className="h-6 w-6 text-[#FF9F0A]" />
                                </div>
                                <div className="text-sm font-medium text-[#1C1C1E]">Garantía 2 años</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
