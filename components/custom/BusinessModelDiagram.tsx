'use client'

import {
  Building2,
  Cloud,
  Factory,
  Megaphone,
  Smartphone,
  Store,
  Truck,
  Users,
  Zap,
} from 'lucide-react'
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  type Edge,
  type Node,
} from 'reactflow'

import 'reactflow/dist/style.css'

const initialNodes: Node[] = [
  {
    id: 'C1',
    data: {
      label: (
        <div style={{ textAlign: 'center', width: '120px' }}>
          <Users className="mx-auto" />
          Clientes
        </div>
      ),
    },
    position: { x: -50, y: 300 },
  },
  {
    id: 'C2',
    data: {
      label: (
        <div style={{ textAlign: 'center', width: '120px' }}>
          <Store className="mx-auto" />
          Canales de Venta
        </div>
      ),
    },
    position: { x: 120, y: 100 },
  },
  {
    id: 'C3',
    data: {
      label: (
        <div style={{ textAlign: 'center', width: '120px' }}>
          <Megaphone className="mx-auto" />
          Marketing
        </div>
      ),
    },
    position: { x: 200, y: -50 },
  },
  {
    id: 'C4',
    data: {
      label: (
        <div style={{ textAlign: 'center', width: '120px' }}>
          <Building2 className="mx-auto" />
          HQ CoreTracker
        </div>
      ),
    },
    position: { x: 450, y: 300 },
    style: { backgroundColor: '#333', color: 'white' },
  },
  {
    id: 'C5',
    data: {
      label: (
        <div style={{ textAlign: 'center', width: '120px' }}>
          <Factory className="mx-auto" />
          Producción
        </div>
      ),
    },
    position: { x: 720, y: 160 },
  },
  {
    id: 'C6',
    data: {
      label: (
        <div style={{ textAlign: 'center', width: '120px' }}>
          <Truck className="mx-auto" />
          Logística 3PL
        </div>
      ),
    },
    position: { x: 720, y: 350 },
  },
  {
    id: 'C7',
    data: {
      label: (
        <div style={{ textAlign: 'center', width: '120px' }}>
          <Smartphone className="mx-auto" />
          App CoreTracker
        </div>
      ),
    },
    position: { x: 200, y: 500 },
  },
  {
    id: 'C8',
    data: {
      label: (
        <div style={{ textAlign: 'center', width: '120px' }}>
          <Cloud className="mx-auto" />
          Datacenter/Cloud
        </div>
      ),
    },
    position: { x: 450, y: 500 },
  },
  {
    id: 'C9',
    data: {
      label: (
        <div style={{ textAlign: 'center', width: '120px' }}>
          <Zap className="mx-auto" />
          Automatización
        </div>
      ),
    },
    position: { x: 350, y: 160 },
  },
]

const edgeDefaults = {
  animated: true,
  type: 'smoothstep',
  markerEnd: {
    type: MarkerType.ArrowClosed,
  },
}

const initialEdges: Edge[] = [
  { id: 'e3-2', source: 'C3', target: 'C2', label: 'Tráfico / leads', ...edgeDefaults },
  { id: 'e1-2', source: 'C1', target: 'C2', label: 'Transacción', ...edgeDefaults },
  { id: 'e2-9', source: 'C2', target: 'C9', label: 'Nueva orden', ...edgeDefaults },
  { id: 'e9-4', source: 'C9', target: 'C4', label: 'Orden confirmada', ...edgeDefaults },
  { id: 'e4-5', source: 'C4', target: 'C5', label: 'Orden fabricación', ...edgeDefaults },
  { id: 'e5-6', source: 'C5', target: 'C6', label: 'Lotes físicos', ...edgeDefaults },
  { id: 'e6-1', source: 'C6', target: 'C1', label: 'Entrega', ...edgeDefaults },
  { id: 'e6-9', source: 'C6', target: 'C9', label: 'Estado de envío', ...edgeDefaults },
  { id: 'e1-7', source: 'C1', target: 'C7', label: 'Datos BLE', ...edgeDefaults },
  { id: 'e7-8', source: 'C7', target: 'C8', label: 'API REST', ...edgeDefaults },
  { id: 'e8-7', source: 'C8', target: 'C7', label: 'Insights / Push', ...edgeDefaults },
  { id: 'e8-4', source: 'C8', target: 'C4', label: 'Analítica agregada', ...edgeDefaults },
  { id: 'e4-1', source: 'C4', target: 'C1', label: 'Soporte / CRM', ...edgeDefaults },
]

export function BusinessModelDiagram() {
  return (
    <div style={{ height: '700px', width: '100%', border: '1px solid #ddd', borderRadius: '8px' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}
