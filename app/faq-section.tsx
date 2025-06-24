"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        question: "¿Duele el impulso eléctrico?",
        answer:
            "No, los impulsos son muy suaves y seguros. La intensidad es completamente personalizable y la mayoría de usuarios los describe como una ligera vibración o cosquilleo. Puedes ajustar la intensidad desde la app según tu comodidad.",
    },
    {
        question: "¿Funciona tanto sentado como de pie?",
        answer:
            "Sí, el dispositivo está diseñado para funcionar en cualquier posición. Los sensores inteligentes se adaptan automáticamente a tu postura, ya sea que estés sentado en el escritorio, de pie, caminando o incluso haciendo ejercicio.",
    },
    {
        question: "¿Necesito usarlo todo el día?",
        answer:
            "No es necesario. Recomendamos comenzar con 2-3 horas diarias y aumentar gradualmente. Muchos usuarios obtienen excelentes resultados usándolo solo durante las horas de trabajo o actividades específicas donde tienden a encorvarse.",
    },
    {
        question: "¿Puedo usarlo mientras hago ejercicio?",
        answer:
            "Absolutamente. El dispositivo tiene resistencia IPX4 (resistente al sudor) y cuenta con un 'Modo Entrenamiento' específico que se adapta a los movimientos durante el ejercicio físico.",
    },
    {
        question: "¿Qué incluye la garantía?",
        answer:
            "Ofrecemos 2 años de garantía completa que cubre defectos de fabricación y mal funcionamiento. Además, tienes 30 días de prueba gratuita - si no estás satisfecho, te devolvemos el 100% de tu dinero.",
    }
]

export function FAQSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-light text-[#1C1C1E] mb-4">
                        Preguntas <span className="font-medium text-[#24C88B]">frecuentes</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Resolvemos todas tus dudas sobre el Corrector de Postura Smart
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-gray-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <AccordionTrigger className="text-left font-medium text-[#1C1C1E] hover:text-[#24C88B] transition-colors duration-200 py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">¿Tienes más preguntas?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:soporte@posturesmart.com"
                            className="text-[#007AFF] hover:text-[#0056b3] font-medium transition-colors duration-200"
                        >
                            soporte@posturesmart.com
                        </a>
                        <span className="hidden sm:inline text-gray-400">|</span>
                        <a
                            href="tel:+34900123456"
                            className="text-[#007AFF] hover:text-[#0056b3] font-medium transition-colors duration-200"
                        >
                            +34 900 123 456
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
