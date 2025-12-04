<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Dyckia distachya<br>Endemic Brazilian Bromeliad';
	const badges = [
		'Endangered Species',
		'Somatic Embryogenesis',
		'PBZ: 6 μM'
	];
	const introColumns = [
		'Dyckia genus (Pitcairnioideae) comprises 121 species occurring exclusively in southwest South America. Dyckia distachya is an endemic and endangered bromeliad native to western Santa Catarina State, southern Brazil. The reference workflow follows the LFDGV/CCA/UFSC benchmark described in Jain & Ochatt (2010).',
		'This bromeliad shows several ornamental features and occurs in the Brazilian Atlantic Forest, considered one of the most important plant diversity centers and a biodiversity hotspot. Most bromeliads in this biome are endemic.',
		'Two regenerative protocols are provided: somatic embryogenesis using Picloram induction, and direct organogenesis from seeds using BAP/Kinetin. Both serve conservation and commercial propagation needs.'
	];

	const timelineA = [
		{ window: 'Stage 1 · Weeks 0–8', label: 'Induction (Dark)', notes: 'Picloram 5 μM, proembryogenic masses form' },
		{ window: 'Stage 2 · Weeks 8–14', label: 'Development (Dark)', notes: 'Embryogenic cultures develop' },
		{ window: 'Stage 3 · Weeks 14–18', label: 'Maturation (Light)', notes: '2-iP 5 μM + NAA 0.5 μM, embryo conversion' },
		{ window: 'Stage 4 · Variable', label: 'Plantlet Development', notes: 'PGR-free medium' },
		{ window: 'Stage 5 · Weeks 18–24', label: 'Acclimatization', notes: '6 weeks in controlled mist' }
	];

	const timelineB = [
		{ window: 'Stage 1 · Day 0', label: 'Seed Sterilization', notes: '70% EtOH + 1.5% NaOCl' },
		{ window: 'Stage 2 · Weeks 0–6', label: 'Induction', notes: 'BAP 2 μM + Kinetin 2 μM' },
		{ window: 'Stage 3 · Weeks 6–12', label: 'Multiplication', notes: 'NAA 2 μM + BAP 4 μM + PBZ 6 μM' },
		{ window: 'Stage 4 · Weeks 12–18', label: 'Elongation', notes: 'GA₃ 5 μM' },
		{ window: 'Stage 5 · Weeks 18–36', label: 'Acclimatization', notes: '18 weeks, 92% survival' }
	];

	const protocolComparison = [
		{ aspect: 'Explant', protocolA: 'Seeds from green capsules', protocolB: 'Seeds from mature capsules' },
		{ aspect: 'Induction', protocolA: 'Picloram 5 μM (dark)', protocolB: 'BAP 2 μM + Kin 2 μM (light)' },
		{ aspect: 'Pathway', protocolA: 'Somatic embryogenesis', protocolB: 'Direct organogenesis' },
		{ aspect: 'Induction Time', protocolA: '14 weeks (dark)', protocolB: '6 weeks (light)' },
		{ aspect: 'Multiplication', protocolA: '2-iP 5 μM + NAA 0.5 μM', protocolB: 'NAA + BAP + PBZ 6 μM' },
		{ aspect: 'Acclimatization', protocolA: '6 weeks', protocolB: '18 weeks' },
		{ aspect: 'Survival', protocolA: 'Not specified', protocolB: '92%' },
		{ aspect: 'Best For', protocolA: 'High multiplication potential', protocolB: 'Faster, simpler protocol' }
	];

	const source = 'Guerra & Dal Vesco (2010) in Jain & Ochatt (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Dyckia distachya Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Protocol A: Somatic Embryogenesis">
		<div class="protocol-section">
			<h4>Stage 1: Induction (8 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Collect green capsules from flower stalks of mother plants.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong><Term abbr="Sterilization" />:</strong> 70% ethanol (<Timer duration={120} label="EtOH">2 min</Timer>) → 1.5% sodium hypochlorite + 2-3 drops Tween 20 (<Timer duration={1200} label="Bleach">20 min</Timer>) → rinse 3× in <Term abbr="sterile water" />
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Open capsules aseptically and inoculate 10 seeds per Petri dish.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Medium:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Agar" /> {convertWeight(6, $unitSystem)}/L + <Term abbr="Picloram" /> (5 μM)
				</li>
				<li>
					<span class="step-number">Step 5</span>
					Use {convertVolume(20, $unitSystem)} medium per Petri dish.
				</li>
				<li>
					<span class="step-number">Step 6</span>
					<strong>Culture in dark:</strong> {convertTemp(25, $unitSystem)} ± 1°C, 60% ± 5% RH
				</li>
				<li>
					<span class="step-number">Step 7</span>
					After <Timer duration={4838400} label="Induction">8 weeks</Timer>, proembryogenic cellular masses are observed.
				</li>
			</ol>

			<h4>Stage 2: Development (6 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Proembryogenic masses evolve into embryogenic cultures after <Timer duration={3628800} label="Development">6 more weeks</Timer> in dark.
				</li>
			</ol>

			<h4>Stage 3: Maturation & Conversion (30-45 days)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture {convertWeight(0.5, $unitSystem)} embryogenic cultures in Petri dishes.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(20, $unitSystem)} culture medium per dish.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Agar" /> {convertWeight(6, $unitSystem)}/L + <Term abbr="2-iP" /> (5 μM) + <Term abbr="NAA" /> (0.5 μM)
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Transfer to light:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h <Term abbr="photoperiod" /> (50-60 μmol/m²/s)
				</li>
				<li>
					<span class="step-number">Step 5</span>
					After <Timer duration={2592000} label="Conversion">30-45 days</Timer>, somatic embryos develop to mature stage and convert to plantlets.
				</li>
			</ol>

			<h4>Stage 4: Plantlet Development</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture plantlets in Petri dishes with {convertVolume(20, $unitSystem)} fresh medium.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Agar" /> {convertWeight(6, $unitSystem)}/L, <strong>free of <Term abbr="PGR" /></strong>
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Allow initial plantlet development in hormone-free medium.
				</li>
			</ol>

			<h4>Stage 5: Acclimatization (6 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Transfer shoots &gt;3 cm to 72-cell trays (120 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Substrate options:</strong>
					<ul>
						<li>1:1 (v:v) carbonized rice coat + Turfa Fértil® (N:4%, P₂O₅:14%, K₂O:8%), <em>or</em></li>
						<li>2:2:1 (v:v:v) peat : vermiculite : sand</li>
					</ul>
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Greenhouse with controlled mist for <Timer duration={3628800} label="Acclimatization">6 weeks</Timer>.
				</li>
			</ol>
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol B: Direct Organogenesis from Seeds">
		<div class="protocol-section">
			<h4>Stage 1: Seed Collection & Sterilization</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Collect seed-containing capsules from mother plants and seal in polyethylene bags.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong><Term abbr="Sterilization" />:</strong> Same as Protocol A (see above)
				</li>
			</ol>

			<h4>Stage 2: Induction (6 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Open capsules aseptically and inoculate 10 seeds per Petri dish.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(20, $unitSystem)} culture medium per dish.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Medium:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Agar" /> Sigma® {convertWeight(6, $unitSystem)}/L + <Term abbr="BAP" /> (2 μM) + <Term abbr="Kinetin" /> (2 μM)
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h light, 60% ± 5% RH
				</li>
			</ol>

			<h4>Stage 3: Multiplication (6 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					After <Timer duration={3628800} label="Initial Growth">6 weeks</Timer>, subculture 5-8 shoot clusters per 300 mL flask.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(15, $unitSystem)} liquid culture medium per flask.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM) + <Term abbr="Paclobutrazol" /> (PBZ) (6 μM)
				</li>
			</ol>

			<h4>Stage 4: Elongation (6 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture 5-8 clusters for <Timer duration={3628800} label="Elongation">6 more weeks</Timer>.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use 300 mL flasks with {convertVolume(20, $unitSystem)} liquid medium.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="GA₃" /> (5 μM)
				</li>
			</ol>

			<h4>Stage 5: Acclimatization (18 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Transfer shoots &gt;3.0 cm to trays of 128 cells (60 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Substrate:</strong> 2:2:1 (v:v:v) peat : vermiculite : sand
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Greenhouse with controlled mist for <Timer duration={10886400} label="Extended Acclim">18 weeks</Timer>.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Survival rate:</strong> 92%
				</li>
			</ol>
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol A Timeline (PDF Benchmark)">
		<div class="timeline-grid">
			{#each timelineA as item}
				<div class="timeline-card">
					<p class="timeline-window">{item.window}</p>
					<p class="timeline-label">{item.label}</p>
					<p class="timeline-notes">{item.notes}</p>
				</div>
			{/each}
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol B Timeline (PDF Benchmark)">
		<div class="timeline-grid">
			{#each timelineB as item}
				<div class="timeline-card">
					<p class="timeline-window">{item.window}</p>
					<p class="timeline-label">{item.label}</p>
					<p class="timeline-notes">{item.notes}</p>
				</div>
			{/each}
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol Comparison">
		<p class="microcopy">Choose Protocol A for high multiplication potential or Protocol B for faster turnaround.</p>
		<div class="data-table-wrapper">
			<table class="data-table">
				<thead>
					<tr>
						<th>Aspect</th>
						<th>Protocol A (Somatic Embryo)</th>
						<th>Protocol B (Organogenesis)</th>
					</tr>
				</thead>
				<tbody>
					{#each protocolComparison as row}
						<tr>
							<td><strong>{row.aspect}</strong></td>
							<td>{row.protocolA}</td>
							<td>{row.protocolB}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<div class="success-grid">
			<div>
				<h4>Protocol A (Somatic Embryogenesis)</h4>
				<ul>
					<li><strong>Dark culture essential:</strong> Embryogenic induction requires complete darkness</li>
					<li><strong>Picloram concentration:</strong> 5 μM optimal for proembryogenic mass formation</li>
					<li><strong>Light transition:</strong> Transfer to light only after embryogenic cultures form</li>
					<li><strong>2-iP conversion:</strong> Critical for embryo maturation and plantlet conversion</li>
					<li><strong>PGR-free development:</strong> Allows natural plantlet establishment</li>
				</ul>
			</div>
			<div>
				<h4>Protocol B (Direct Organogenesis)</h4>
				<ul>
					<li><strong>Dual cytokinin:</strong> BAP + Kinetin combination promotes direct shoot formation</li>
					<li><strong>PBZ application:</strong> Prevents hyperhydricity, produces compact shoots</li>
					<li><strong>GA₃ elongation:</strong> Essential for achieving adequate shoot size</li>
					<li><strong>Extended acclimatization:</strong> 18 weeks needed for 92% survival</li>
					<li><strong>Substrate drainage:</strong> Peat:vermiculite:sand mix ideal for this terrestrial species</li>
				</ul>
			</div>
		</div>
	</ContentBlock>
</ProtocolLayout>

<style>
	.protocol-section {
		margin-bottom: 2rem;
	}
	
	.protocol-section h4 {
		color: var(--accent-color, #4a9f7c);
		margin: 1.5rem 0 0.75rem 0;
		font-size: 1.1rem;
	}
	
	.protocol-section h4:first-child {
		margin-top: 0;
	}

	.success-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 1rem;
	}

	.success-grid h4 {
		color: var(--accent-color, #4a9f7c);
		margin: 0 0 0.75rem 0;
	}

	.success-grid ul {
		margin: 0;
		padding-left: 1.25rem;
	}

	.success-grid li {
		margin: 0.5rem 0;
	}

	.microcopy {
		font-size: 0.95rem;
		font-weight: 500;
		letter-spacing: -0.01em;
		color: #4a5568;
		margin-bottom: 0.5rem;
		font-family: 'InterVariable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.data-table-wrapper {
		overflow-x: auto;
		margin-top: 1rem;
	}

	.data-table {
		width: 100%;
		border-collapse: collapse;
		font-family: 'InterVariable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		font-size: 0.95rem;
		border-spacing: 0;
	}

	.data-table thead th {
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #718096;
		font-weight: 600;
		padding: 0.8rem;
		border-bottom: 1px solid #e2e8f0;
		background: #f8fafc;
	}

	.data-table tbody td {
		padding: 0.85rem;
		border-bottom: 1px solid #edf2f7;
		color: #2d3748;
	}

	.data-table tbody tr:nth-child(odd) td {
		background: #fcfdff;
	}

	.timeline-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.25rem;
		margin-top: 1rem;
	}

	.timeline-card {
		border: 1px solid #e2e8f0;
		border-radius: 14px;
		padding: 1rem;
		background: #fff;
		box-shadow: 0 15px 25px rgba(15, 23, 42, 0.08);
	}

	.timeline-window {
		font-size: 0.78rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #a0aec0;
		font-weight: 600;
	}

	.timeline-label {
		font-size: 1.05rem;
		font-weight: 600;
		margin: 0.25rem 0;
		color: #1a202c;
	}

	.timeline-notes {
		font-size: 0.95rem;
		color: #4a5568;
		line-height: 1.5;
	}

	.step-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.step-list li {
		margin-bottom: 1rem;
	}

	.step-number {
		font-weight: 600;
		margin-right: 0.5rem;
		font-family: 'InterVariable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}
</style>
