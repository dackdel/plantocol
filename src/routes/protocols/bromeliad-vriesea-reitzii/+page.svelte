<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Vriesea reitzii<br>Endemic South Brazil';
	const badges = [
		'Threatened Species',
		'2 Protocol Options',
		'Multiplication: 20:1'
	];
	const introColumns = [
		'Vriesea reitzii is an endemic bromeliad in South Brazil with excellent potential as an ornamental plant. This species presents red and yellow colored inflorescences and occurs in regions with altitudes from 750 to 1,200 m. The reference workflow follows the LFDGV/CCA/UFSC benchmark described in Jain & Ochatt (2010).',
		'The species name honors Raulino Reitz, the "father of bromeliads" in Brazil. The ecosystem where this bromeliad is distributed, the Araucarian Mixed Forest, was severely devastated during the last century.',
		'Two protocols are provided: Protocol A uses adventitious shoots from nodule clusters, while Protocol B focuses on regeneration from nodule cluster cultures with different hormone combinations.'
	];

	const msComponents = [
		{ component: 'NH₄NO₃', stock: '82.5 g/L', volume: '20 mL', final: '1,650 mg/L' },
		{ component: 'KNO₃', stock: '95.0 g/L', volume: '20 mL', final: '1,900 mg/L' },
		{ component: 'CaCl₂·2H₂O', stock: '88.0 g/L', volume: '5 mL', final: '440 mg/L' },
		{ component: 'KH₂PO₄', stock: '34 g/L', volume: '5 mL', final: '170 mg/L' },
		{ component: 'MgSO₄·7H₂O', stock: '74 g/L', volume: '5 mL', final: '370 mg/L' },
		{ component: 'Fe-EDTA solution', stock: '37.3 & 27.8 g/L', volume: '10 mL', final: 'Fe chelate pair' },
		{ component: 'Micronutrient mix', stock: '1.24–0.0055 g/L', volume: '5 mL', final: 'Boron, iodine, molybdenum, cobalt' },
		{ component: 'Morel vitamins', stock: '1–100 mg/L', volume: 'full strength', final: 'Thiamine, pyridoxine, nicotinic acid, Ca pantothenate, myo-inositol, glycine' },
		{ component: 'Sucrose', stock: '-', volume: '-', finalWeight: 30 }
	];

	const timelineA = [
		{ window: 'Stage 1 · Weeks 0–20', label: 'Induction', notes: 'NAA 2 μM + BAP 4 μM → subculture with NAA 1 μM + BAP 2 μM' },
		{ window: 'Stage 2 · Weeks 20–38', label: 'Multiplication', notes: 'Nodular clumps in 300 mL flasks, 9-week subculture intervals' },
		{ window: 'Stage 3 · Weeks 38–54', label: 'Elongation', notes: 'GA₃ 10 μM for 8 weeks → PGR-free for 8 weeks' },
		{ window: 'Stage 4 · Weeks 54–63', label: 'Acclimatization', notes: '1:1 carbonized rice coat + Turfa Fértil®, nebulization tunnel' }
	];

	const timelineB = [
		{ window: 'Stage 1 · Weeks 0–7', label: 'Induction', notes: '2,4-D 20 μM + Kinetin 1 μM on agar medium' },
		{ window: 'Stage 2 · Weeks 7–15', label: 'Establishment', notes: '2-iP 2.5 μM + NAA 0.5 μM' },
		{ window: 'Stage 3 · Weeks 15–21', label: 'Multiplication', notes: 'PGR-free medium' },
		{ window: 'Stage 4 · Weeks 21–29', label: 'Elongation', notes: 'GA₃ 10 μM in liquid medium' },
		{ window: 'Stage 5 · Weeks 29–38', label: 'Acclimatization', notes: '95% survival rate' }
	];

	const protocolComparison = [
		{ aspect: 'Explant Source', protocolA: 'Buds from shoots', protocolB: '0.5 mm leaf segments' },
		{ aspect: 'Induction Hormones', protocolA: 'NAA + BAP', protocolB: '2,4-D + Kinetin' },
		{ aspect: 'Medium Type', protocolA: 'Liquid throughout', protocolB: 'Agar → Liquid' },
		{ aspect: 'Multiplication', protocolA: 'NAA + BAP or PGR-free', protocolB: 'PGR-free only' },
		{ aspect: 'Max Rate', protocolA: '20:1', protocolB: 'High rate' },
		{ aspect: 'Total Time', protocolA: '~63 weeks', protocolB: '~38 weeks' },
		{ aspect: 'Survival', protocolA: 'High', protocolB: '95%' }
	];

	const source = 'Guerra & Dal Vesco (2010) in Jain & Ochatt (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Vriesea reitzii Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Basal Medium Reference (MS + Morel)">
		<p class="microcopy">Both protocols use Murashige & Skoog salts plus Morel vitamins as the basal medium.</p>
		<div class="data-table-wrapper">
			<table class="data-table">
				<thead>
					<tr>
						<th>Component</th>
						<th>Stock</th>
						<th>Volume</th>
						<th>Final in 1 L</th>
					</tr>
				</thead>
				<tbody>
					{#each msComponents as row}
						<tr>
							<td>{row.component}</td>
							<td>{row.stock}</td>
							<td>{row.volume}</td>
							<td>
								{#if row.final}
									{row.final}
								{:else if row.finalWeight}
									{convertWeight(row.finalWeight, $unitSystem)}/L
								{:else}
									—
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol A: Adventitious Shoots from Nodule Cluster">
		<div class="protocol-section">
			<h4>Stage 1: Induction (10 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Inoculate buds over filter paper bridges in test tubes (25 mm × 150 mm).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(15, $unitSystem)} liquid medium: <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM)
				</li>
				<li>
					<span class="step-number">Step 3</span>
					After <Timer duration={6048000} label="Initial Induction">10 weeks</Timer>, subculture with NAA (1 μM) + BAP (2 μM) for another 10 weeks.
				</li>
			</ol>

			<h4>Stage 2: Multiplication</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Inoculate 5-8 microshoot clusters in 300 mL flasks with {convertVolume(20, $unitSystem)} liquid medium.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM)
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Yellow and green nodular clumps develop at basal region within <Timer duration={6048000} label="Nodule Formation">10 weeks</Timer>.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					Subculture {convertWeight(0.05, $unitSystem)} nodular clumps twice at 9-week intervals in same medium.
				</li>
				<li>
					<span class="step-number">Step 5</span>
					Nodular clumps evolve to nodular cluster cultures bearing microshoots.
				</li>
			</ol>

			<h4>Long-term Maintenance</h4>
			<p>Maintain nodular clumps in 300 mL flasks with {convertVolume(15, $unitSystem)} liquid medium <strong>free of <Term abbr="PGR" /></strong>.</p>

			<h4>Multiplication Option 1</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture {convertWeight(0.05, $unitSystem)} nodule clusters in 300 mL flasks.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(10, $unitSystem)} liquid medium with <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM).
				</li>
			</ol>

			<h4>Multiplication Option 2</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Inoculate previously elongated shoots (1.0-2.5 cm) in 300 mL flasks.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(20, $unitSystem)} liquid medium with <Term abbr="NAA" /> (1 μM) + <Term abbr="BAP" /> (2 μM).
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Multiplication rate:</strong> Up to 20:1 after <Timer duration={7257600} label="Multiplication">12 weeks</Timer>.
				</li>
			</ol>

			<h4>Stage 3: Elongation (16 weeks total)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture 10 microshoot clusters per 300 mL flask with {convertVolume(15, $unitSystem)} liquid medium.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>First 8 weeks:</strong> Medium with <Term abbr="GA₃" /> (10 μM).
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Next 8 weeks:</strong> Transfer to same medium <strong>free of <Term abbr="PGR" /></strong>.
				</li>
			</ol>

			<h4>Stage 4: Acclimatization (9 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Transfer shoots &gt;3 cm to trays of 72 cells (120 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Substrate:</strong> 1:1 (v:v) carbonized rice coat + Turfa Fértil® (N:4%, P₂O₅:14%, K₂O:8%)
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Greenhouse with controlled mist until shoots reach 4-5 cm.
				</li>
			</ol>
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol B: Regeneration from Nodule Cluster Cultures">
		<div class="protocol-section">
			<h4>Stage 1: Induction (7 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Remove 0.5 mm segments from basal region of young leaves from established microshoots.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Inoculate 5-8 segments in Petri dishes with {convertVolume(25, $unitSystem)} culture medium.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Agar" /> {convertWeight(7, $unitSystem)}/L + <Term abbr="2,4-D" /> (20 μM) + <Term abbr="Kinetin" /> (1 μM)
				</li>
				<li>
					<span class="step-number">Step 4</span>
					After <Timer duration={4233600} label="Nodule Induction">7 weeks</Timer>, nodular cluster cultures arise from basal region.
				</li>
			</ol>

			<h4>Stage 2: Establishment & Development (8 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture {convertWeight(0.25, $unitSystem)} nodular cluster cultures.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="2-iP" /> (2.5 μM) + <Term abbr="NAA" /> (0.5 μM)
				</li>
			</ol>

			<h4>Stage 3: Multiplication (6 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture {convertWeight(0.5, $unitSystem)} nodular clusters for <Timer duration={3628800} label="Multiplication">6 weeks</Timer>.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Medium:</strong> Same as above but <strong>free of <Term abbr="PGR" /></strong>.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Clusters of microshoots evolve from nodular cultures.
				</li>
			</ol>

			<h4>Stage 4: Elongation</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture 8-10 clusters of microshoots in 300 mL flasks.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(15, $unitSystem)} liquid medium with <Term abbr="GA₃" /> (10 μM).
				</li>
			</ol>

			<h4>Stage 5: Acclimatization (9 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Transfer shoots &gt;3 cm to trays of 128 cells (60 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Substrate:</strong> 1:1 (v:v) carbonized rice coat + Turfa Fértil®
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Nebulization tunnel, then transfer to pots after <Timer duration={5443200} label="Initial Acclim">9 weeks</Timer>.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Survival rate:</strong> 95%
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
		<p class="microcopy">Choose Protocol A for higher multiplication rates or Protocol B for faster turnaround.</p>
		<div class="data-table-wrapper">
			<table class="data-table">
				<thead>
					<tr>
						<th>Aspect</th>
						<th>Protocol A</th>
						<th>Protocol B</th>
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
		<ul>
			<li><strong>Protocol selection:</strong> Choose based on explant availability and timeline requirements</li>
			<li><strong>Nodule development:</strong> Critical phase requiring proper hormone balance</li>
			<li><strong>PGR-free maintenance:</strong> Allows sustainable long-term culture storage</li>
			<li><strong>Elongation timing:</strong> Two-phase elongation (with/without GA₃) ensures proper shoot development</li>
			<li><strong>Cell size for acclimatization:</strong> Protocol A uses larger cells (120 cm³) for better initial development</li>
		</ul>
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
