// Diagrams for the Services carousel. Each one is a 400x300 SVG drawn for a dark panel.
// Animation classes (art-flow, art-pulse) live in globals.css and respect reduced motion.

export type ServiceArtKind = "api" | "microservices" | "cloud";

type ArtProps = { className?: string };

const STROKE = "rgba(255,255,255,0.25)";
const FILL = "#262626";
const TEXT = "#f1f1f1";
const MUTED = "#9a9a9a";
const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

function Frame({ label, className, children }: ArtProps & { label: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={label} className={className}>
      {children}
    </svg>
  );
}

// ── API Development & Integration: client ⇄ REST API ⇄ third-party systems ──
function ApiArt({ className }: ArtProps) {
  const accent = "#e0234e";
  const integrations = [
    { y: 28, title: "Payments", sub: "BCEL · LDB · LVB" },
    { y: 90, title: "SMS · OTP", sub: "gateway" },
    { y: 152, title: "FCM", sub: "push alerts" },
    { y: 214, title: "Social sign-in", sub: "OAuth" },
  ];

  return (
    <Frame label="Diagram of a client calling a REST API that connects to payment, SMS, push notification and social sign-in services" className={className}>
      {/* client */}
      <rect x="22" y="108" width="64" height="84" rx="12" fill={FILL} stroke={STROKE} />
      <rect x="44" y="117" width="20" height="4" rx="2" fill={STROKE} />
      <rect x="32" y="134" width="44" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="32" y="148" width="34" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="32" y="162" width="40" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <text x="54" y="212" textAnchor="middle" fontSize="11" fill={MUTED}>Client</text>

      {/* request / response */}
      <path d="M86 138 H150" stroke={accent} strokeWidth="1.6" strokeLinecap="round" className="art-flow" fill="none" />
      <path d="M150 162 H86" stroke={STROKE} strokeWidth="1.6" strokeLinecap="round" className="art-flow" fill="none" />
      <text x="118" y="131" textAnchor="middle" fontSize="8" fill={MUTED}>request</text>
      <text x="118" y="177" textAnchor="middle" fontSize="8" fill={MUTED}>response</text>

      {/* API gateway */}
      <rect x="150" y="96" width="100" height="108" rx="12" fill={FILL} stroke={accent} strokeWidth="1.5" />
      <text x="200" y="136" textAnchor="middle" fontSize="13" fontWeight="600" fill={TEXT}>REST API</text>
      <text x="200" y="154" textAnchor="middle" fontSize="10" fill={MUTED}>NestJS</text>
      <rect x="175" y="168" width="50" height="18" rx="9" fill="rgba(224,35,78,0.18)" stroke={accent} />
      <text x="200" y="180.5" textAnchor="middle" fontSize="9" fill={accent} fontWeight="600">200 OK</text>

      {/* integrations */}
      {integrations.map((item) => {
        const cy = item.y + 22;
        return (
          <g key={item.title}>
            <path
              d={`M250 150 C 270 150 268 ${cy} 288 ${cy}`}
              stroke={STROKE}
              strokeWidth="1.4"
              fill="none"
              className="art-flow"
            />
            <rect x="288" y={item.y} width="100" height="44" rx="9" fill={FILL} stroke={STROKE} />
            <text x="338" y={item.y + 20} textAnchor="middle" fontSize="11" fontWeight="500" fill={TEXT}>{item.title}</text>
            <text x="338" y={item.y + 33} textAnchor="middle" fontSize="8.5" fill={MUTED}>{item.sub}</text>
          </g>
        );
      })}

      <text x="22" y="272" fontSize="9" fill={MUTED} fontFamily={MONO}>POST /payments → 201 Created</text>
    </Frame>
  );
}

// ── Microservices & Databases: services on a RabbitMQ bus, each with its data layer ──
function MicroservicesArt({ className }: ArtProps) {
  const accent = "#3b82f6";
  const services = [
    { cx: 58, name: "Auth" },
    { cx: 153, name: "Lottery" },
    { cx: 248, name: "Points" },
    { cx: 342, name: "Customer" },
  ];

  const cylinder = (cx: number, y0: number) => (
    <g>
      <path
        d={`M${cx - 28} ${y0 + 7} a28 7 0 0 1 56 0 v32 a28 7 0 0 1 -56 0 z`}
        fill={FILL}
        stroke={STROKE}
      />
      <ellipse cx={cx} cy={y0 + 7} rx="28" ry="7" fill="rgba(255,255,255,0.08)" stroke={STROKE} />
    </g>
  );

  return (
    <Frame label="Diagram of NestJS microservices communicating over a RabbitMQ message bus, backed by PostgreSQL databases and a Redis cache" className={className}>
      {/* services */}
      {services.map((service) => (
        <g key={service.name}>
          <rect x={service.cx - 38} y="28" width="76" height="44" rx="9" fill={FILL} stroke={STROKE} />
          <text x={service.cx} y="50" textAnchor="middle" fontSize="11" fontWeight="500" fill={TEXT}>{service.name}</text>
          <text x={service.cx} y="63" textAnchor="middle" fontSize="8" fill={MUTED}>NestJS</text>
          <path d={`M${service.cx} 72 V125`} stroke={accent} strokeWidth="1.4" fill="none" className="art-flow" />
        </g>
      ))}

      {/* message bus */}
      <rect x="20" y="125" width="360" height="34" rx="17" fill={FILL} stroke={accent} strokeWidth="1.5" />
      <circle cx="42" cy="142" r="3.5" fill={accent} className="art-pulse" />
      <text x="200" y="146" textAnchor="middle" fontSize="11" fontWeight="500" fill={TEXT}>RabbitMQ · message bus</text>

      {/* data layer */}
      {services.slice(0, 3).map((service) => (
        <g key={`db-${service.name}`}>
          <path d={`M${service.cx} 159 V200`} stroke={STROKE} strokeWidth="1.4" fill="none" className="art-flow" />
          {cylinder(service.cx, 200)}
          <text x={service.cx} y="266" textAnchor="middle" fontSize="9" fill={MUTED}>PostgreSQL</text>
          <text x={service.cx} y="230" textAnchor="middle" fontSize="8.5" fill={TEXT}>Prisma</text>
        </g>
      ))}

      {/* cache */}
      <path d="M342 159 V200" stroke={STROKE} strokeWidth="1.4" fill="none" className="art-flow" />
      <rect x="314" y="200" width="56" height="46" rx="9" fill={FILL} stroke={accent} strokeWidth="1.2" />
      <text x="342" y="221" textAnchor="middle" fontSize="11" fontWeight="500" fill={TEXT}>Redis</text>
      <text x="342" y="235" textAnchor="middle" fontSize="8" fill={MUTED}>cache</text>
      <text x="342" y="266" textAnchor="middle" fontSize="9" fill={MUTED}>in-memory</text>
    </Frame>
  );
}

// ── Cloud & DevOps: git push → CI/CD → Docker → Kubernetes on AWS / GCP ──
function CloudArt({ className }: ArtProps) {
  const accent = "#f59e0b";
  const stages = [
    { cx: 50, label: "Git push" },
    { cx: 150, label: "GitHub Actions" },
    { cx: 250, label: "Docker" },
    { cx: 350, label: "Kubernetes" },
  ];
  const spokes = [
    [13, 0],
    [6.5, 11.3],
    [-6.5, 11.3],
    [-13, 0],
    [-6.5, -11.3],
    [6.5, -11.3],
  ];
  const pods = Array.from({ length: 10 }, (_, i) => ({ x: 40 + (i % 5) * 66, y: i < 5 ? 182 : 224 }));
  const running = new Set([0, 1, 3, 5, 6, 8]);
  const pulsing = new Set([3, 8]);

  return (
    <Frame label="Diagram of a CI/CD pipeline that builds a Docker image and deploys it to a Kubernetes cluster on AWS and Google Cloud, provisioned with Terraform" className={className}>
      {/* pipeline connectors */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${stages[i].cx + 24} 70 H${stages[i + 1].cx - 24}`}
          stroke={accent}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          className="art-flow"
        />
      ))}

      {/* stage icons */}
      {stages.map((stage) => (
        <g key={stage.label}>
          <circle cx={stage.cx} cy="70" r="24" fill={FILL} stroke={STROKE} />
          <text x={stage.cx} y="112" textAnchor="middle" fontSize="10.5" fill={MUTED}>{stage.label}</text>
        </g>
      ))}

      {/* git */}
      <g stroke={TEXT} strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M44 62 V78" />
        <path d="M44 74 Q44 66 56 66" />
      </g>
      <circle cx="44" cy="60" r="3" fill={TEXT} />
      <circle cx="44" cy="80" r="3" fill={TEXT} />
      <circle cx="57" cy="66" r="3" fill={TEXT} />

      {/* pipeline run */}
      <path d="M144 59 L161 70 L144 81 Z" fill={TEXT} />

      {/* docker blocks */}
      <g stroke={TEXT} strokeWidth="1.4" fill="none">
        <rect x="237" y="70" width="9" height="9" />
        <rect x="248" y="70" width="9" height="9" />
        <rect x="259" y="70" width="9" height="9" />
        <rect x="243" y="59" width="9" height="9" />
        <rect x="254" y="59" width="9" height="9" />
      </g>

      {/* kubernetes wheel */}
      <g stroke={TEXT} strokeWidth="1.5" fill="none" strokeLinecap="round">
        <circle cx="350" cy="70" r="13" />
        {spokes.map(([dx, dy]) => (
          <path key={`${dx}${dy}`} d={`M350 70 L${350 + dx} ${70 + dy}`} />
        ))}
      </g>
      <circle cx="350" cy="70" r="3" fill={TEXT} />

      {/* hand-off into the cluster */}
      <path d="M350 118 V134" stroke={accent} strokeWidth="1.6" fill="none" className="art-flow" />
      <path d="M345 130 L350 137 L355 130" stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* cluster */}
      <rect x="24" y="140" width="352" height="134" rx="14" fill="none" stroke={STROKE} strokeDasharray="4 4" />
      <text x="42" y="163" fontSize="11" fontWeight="500" fill={TEXT}>AWS · Google Cloud</text>
      <rect x="268" y="148" width="92" height="22" rx="11" fill="rgba(245,158,11,0.14)" stroke={accent} />
      <text x="314" y="163" textAnchor="middle" fontSize="9.5" fill={accent} fontWeight="600">Terraform IaC</text>

      {pods.map((pod, i) => (
        <g key={i}>
          <rect
            x={pod.x}
            y={pod.y}
            width="56"
            height="32"
            rx="7"
            fill={running.has(i) ? "rgba(245,158,11,0.10)" : FILL}
            stroke={running.has(i) ? accent : STROKE}
            strokeWidth="1"
          />
          <circle
            cx={pod.x + 28}
            cy={pod.y + 16}
            r="3"
            fill={running.has(i) ? accent : STROKE}
            className={pulsing.has(i) ? "art-pulse" : undefined}
          />
        </g>
      ))}
    </Frame>
  );
}

export default function ServiceArt({ kind, className }: { kind: ServiceArtKind } & ArtProps) {
  if (kind === "api") return <ApiArt className={className} />;
  if (kind === "microservices") return <MicroservicesArt className={className} />;
  return <CloudArt className={className} />;
}
