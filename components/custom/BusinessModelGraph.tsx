import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, BackgroundVariant, Node, Edge } from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
  {
    id: 'hq',
    position: { x: 0, y: 0 },
    data: { label: '🏢 CoreTrackers HQ' },
    type: 'input',
    style: { backgroundColor: '#2D3748', color: 'white', border: 'none', borderRadius: '10px', padding: '15px 25px', boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)' },
  },
  {
    id: 'customer',
    position: { x: -350, y: 0 },
    data: { label: '🏠 Cliente' },
    type: 'default',
    style: { backgroundColor: '#E53E3E', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 20px' },
  },
  {
    id: 'shopify',
    position: { x: -150, y: -200 },
    data: { label: '🛒 Shopify' },
    type: 'output',
    style: { backgroundColor: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '10px 20px' },
  },
  {
    id: 'temu',
    position: { x: 0, y: -200 },
    data: { label: '🛍️ Temu' },
    type: 'output',
    style: { backgroundColor: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '10px 20px' },
  },
  {
    id: 'influencers',
    position: { x: 150, y: -200 },
    data: { label: '✨ Influencers' },
    type: 'output',
    style: { backgroundColor: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '10px 20px' },
  },
  {
    id: 'zapier',
    position: { x: 350, y: -100 },
    data: { label: '⚡ Zapier' },
    type: 'default',
    style: { backgroundColor: '#EDF2F7', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '10px 20px' },
  },
  {
    id: 'manufacturing',
    position: { x: 350, y: 0 },
    data: { label: '🏭 Manufactura y Diseño' },
    type: 'default',
    style: { backgroundColor: '#EDF2F7', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '10px 20px' },
  },
  {
    id: 'datacenters',
    position: { x: 350, y: 100 },
    data: { label: '☁️ Datacenters' },
    type: 'default',
    style: { backgroundColor: '#EDF2F7', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '10px 20px' },
  },
];

const initialEdges: Edge[] = [
  // Flujo de compra y entrega
  { id: 'customer-to-hq', source: 'customer', target: 'hq', label: '💸 Compra', animated: true, style: { stroke: '#4A5568' } },
  { id: 'hq-to-customer', source: 'hq', target: 'customer', label: '📦 Envío', animated: true, style: { stroke: '#4A5568' } },

  // Canales de adquisición
  { id: 'shopify-to-hq', source: 'shopify', target: 'hq', style: { stroke: '#A0AEC0' } },
  { id: 'temu-to-hq', source: 'temu', target: 'hq', style: { stroke: '#A0AEC0' } },
  { id: 'influencers-to-hq', source: 'influencers', target: 'hq', style: { stroke: '#A0AEC0' } },

  // Socios y servicios
  { id: 'hq-to-zapier', source: 'hq', target: 'zapier', label: 'Automatización', style: { stroke: '#718096' } },
  { id: 'hq-to-manufacturing', source: 'hq', target: 'manufacturing', label: 'Producción', style: { stroke: '#718096' } },
  { id: 'hq-to-datacenters', source: 'hq', target: 'datacenters', label: 'Infraestructura', style: { stroke: '#718096' } },
];

const BusinessModelGraph = () => {
  return (
    <div style={{ height: '500px', width: '100%', backgroundColor: '#F7FAFC', borderRadius: '15px', border: '1px solid #E2E8F0' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default BusinessModelGraph;
