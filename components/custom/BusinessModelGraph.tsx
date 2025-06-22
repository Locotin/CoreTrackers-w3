const BusinessModelGraph = () => {
  const nodes = [
    { id: "customer", x: 50, y: 200, label: "🏠 Cliente", color: "#E53E3E" },
    { id: "hq", x: 300, y: 200, label: "🏢 CoreTrackers HQ", color: "#2D3748" },
    { id: "shopify", x: 150, y: 50, label: "🛒 Shopify", color: "#F7FAFC" },
    { id: "temu", x: 300, y: 50, label: "🛍️ Temu", color: "#F7FAFC" },
    { id: "influencers", x: 450, y: 50, label: "✨ Influencers", color: "#F7FAFC" },
    { id: "zapier", x: 550, y: 120, label: "⚡ Zapier", color: "#EDF2F7" },
    { id: "manufacturing", x: 550, y: 200, label: "🏭 Manufactura", color: "#EDF2F7" },
    { id: "datacenters", x: 550, y: 280, label: "☁️ Datacenters", color: "#EDF2F7" },
  ]

  const connections = [
    { from: "customer", to: "hq", label: "💸 Compra", color: "#4A5568" },
    { from: "hq", to: "customer", label: "📦 Envío", color: "#4A5568", offset: 20 },
    { from: "shopify", to: "hq", color: "#A0AEC0" },
    { from: "temu", to: "hq", color: "#A0AEC0" },
    { from: "influencers", to: "hq", color: "#A0AEC0" },
    { from: "hq", to: "zapier", label: "Automatización", color: "#718096" },
    { from: "hq", to: "manufacturing", label: "Producción", color: "#718096" },
    { from: "hq", to: "datacenters", label: "Infraestructura", color: "#718096" },
  ]

  const getNodePosition = (nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId)
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 }
  }

  return (
    <div className="w-full h-96 bg-gray-50 rounded-xl border border-gray-200 relative overflow-hidden">
      <svg width="100%" height="100%" className="absolute inset-0">
        {/* Background dots pattern */}
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#E2E8F0" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />

        {/* Connections */}
        {connections.map((conn, index) => {
          const from = getNodePosition(conn.from)
          const to = getNodePosition(conn.to)
          const offset = conn.offset || 0

          return (
            <g key={index}>
              <line
                x1={from.x + 60}
                y1={from.y + 20 + offset}
                x2={to.x + 60}
                y2={to.y + 20 + offset}
                stroke={conn.color}
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              {conn.label && (
                <text
                  x={(from.x + to.x) / 2 + 60}
                  y={(from.y + to.y) / 2 + 15 + offset}
                  textAnchor="middle"
                  className="text-xs fill-gray-600"
                >
                  {conn.label}
                </text>
              )}
            </g>
          )
        })}

        {/* Arrow marker */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4A5568" />
          </marker>
        </defs>
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: node.x + 60,
            top: node.y + 20,
            backgroundColor: node.color,
            color: node.color === "#F7FAFC" || node.color === "#EDF2F7" ? "#1A202C" : "white",
            border: node.color === "#F7FAFC" || node.color === "#EDF2F7" ? "1px solid #E2E8F0" : "none",
          }}
        >
          <div className="px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-sm">{node.label}</div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-sm border">
        <div className="text-xs font-medium text-gray-700 mb-2">Flujo del Negocio</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-red-500"></div>
            <span className="text-xs text-gray-600">Cliente</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-gray-400"></div>
            <span className="text-xs text-gray-600">Canales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-gray-600"></div>
            <span className="text-xs text-gray-600">Servicios</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessModelGraph
