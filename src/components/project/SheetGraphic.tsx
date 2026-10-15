// Desenho abstrato de uma planilha (linhas e colunas).
// É um elemento gráfico — não representa a planilha real do cliente.
export default function SheetGraphic({
  rows = 6,
  cols = 4,
  filled = [],
  className = '',
}: {
  rows?: number
  cols?: number
  filled?: number[] // linhas destacadas (ex.: a linha recém-registrada)
  className?: string
}) {
  return (
    <div aria-hidden="true" className={`overflow-hidden rounded-xl border-2 border-carvao bg-areia ${className}`}>
      <div className="flex gap-1.5 border-b-2 border-carvao bg-restinga px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-areia/60" />
        <span className="h-2 w-2 rounded-full bg-areia/60" />
        <span className="h-2 w-2 rounded-full bg-areia/60" />
      </div>
      <div className="grid" style={{ gridTemplateColumns: `2rem repeat(${cols}, 1fr)` }}>
        {Array.from({ length: rows }).map((_, r) => (
          <Row key={r} cols={cols} index={r} highlight={filled.includes(r)} />
        ))}
      </div>
    </div>
  )
}

function Row({ cols, index, highlight }: { cols: number; index: number; highlight: boolean }) {
  return (
    <>
      <span className="flex h-8 items-center justify-center border-b border-r border-carvao/20 bg-carvao/5 text-[0.6rem] text-carvao/60">
        {index + 1}
      </span>
      {Array.from({ length: cols }).map((_, c) => (
        <span key={c} className={`h-8 border-b border-r border-carvao/20 ${highlight ? 'bg-lima/70' : ''}`}>
          {highlight && <span className="m-2.5 block h-2 rounded-full bg-carvao/40" style={{ width: `${40 + ((c * 23) % 45)}%` }} />}
        </span>
      ))}
    </>
  )
}
