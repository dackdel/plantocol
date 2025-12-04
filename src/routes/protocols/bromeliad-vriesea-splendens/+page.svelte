<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Vriesea splendens<br>Flaming Sword';
	const badges = [
		'TDZ Protocol',
		'TDZ: 0.1 μM',
		'Survival: 95%'
	];
	const introColumns = [
		'Vriesea splendens, commonly known as "flaming sword," is a bromeliad with lance-shaped or linear, green or purplish foliage 30-45 cm long. The leaves have smooth margins and may have colorful bracts at the leaf bases. The reference workflow follows the LFDGV/CCA/UFSC benchmark described in Jain & Ochatt (2010).',
		'From the center of the funnel-shaped rosette emerges an upright inflorescence consisting of a flattened stem of brilliant red or orange overlapping bracts with yellow flowers. The bracts are brightly colored and last for months.',
		'In natural populations, it grows as an epiphyte and terrestrial in lower levels of dense forests of tropical Trinidad, Venezuela, Guyana and Surinam. This protocol uses Thidiazuron for cost-effective multiplication.'
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

	const timeline = [
		{ window: 'Stage 1 · Weeks 0–16', label: 'Induction', notes: 'NAA 1 μM + BAP 2 μM, nodule clusters arise' },
		{ window: 'Stage 2 · Weeks 16–32', label: 'Establishment', notes: 'PGR-free medium, 2× 8-week subcultures' },
		{ window: 'Stage 3 · Variable', label: 'Multiplication', notes: 'TDZ 0.1 μM for cost-effective proliferation' },
		{ window: 'Stage 4 · Weeks 32–44', label: 'Elongation', notes: 'GA₃ 10 μM, shoots reach ≥3 cm' },
		{ window: 'Stage 5 · Weeks 44–52', label: 'Acclimatization', notes: '2:1:1 substrate, 95% survival' }
	];

	const hormoneComparison = [
		{ species: 'V. splendens', induction: 'NAA 1 μM + BAP 2 μM', multiplication: 'TDZ 0.1 μM', elongation: 'GA₃ 10 μM' },
		{ species: 'V. fosteriana', induction: 'NAA 2 μM + BAP 4 μM', multiplication: 'TDZ 0.1 μM', elongation: 'PGR-free' },
		{ species: 'V. reitzii', induction: 'NAA 2 μM + BAP 4 μM', multiplication: 'NAA + BAP or PGR-free', elongation: 'GA₃ 10 μM' },
		{ species: 'V. brusquensis (TIS)', induction: 'NAA 2 μM + BAP 4 μM', multiplication: 'PBZ 2 μM', elongation: 'GA₃ 10 μM' }
	];

	const source = 'Guerra & Dal Vesco (2010) in Jain & Ochatt (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Vriesea splendens Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Basal Medium Reference (MS + Morel)">
		<p class="microcopy">Murashige & Skoog salts plus Morel vitamins form the basal medium for all stages.</p>
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

	<ContentBlock title="Operational Timeline (PDF Benchmark)">
		<div class="timeline-grid">
			{#each timeline as item}
				<div class="timeline-card">
					<p class="timeline-window">{item.window}</p>
					<p class="timeline-label">{item.label}</p>
					<p class="timeline-notes">{item.notes}</p>
				</div>
			{/each}
		</div>
	</ContentBlock>

	<ContentBlock title="Stage 1: Induction (8 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Inoculate buds over filter paper bridges in test tubes (25 mm × 150 mm).
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use {convertVolume(15, $unitSystem)} liquid culture medium per tube.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (1 μM) + <Term abbr="BAP" /> (2 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h light (50-60 μmol/m²/s), 60% ± 5% RH
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={4838400} label="Initial Induction">8 weeks</Timer>, new buds and shoots develop from explants.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				After <Timer duration={4838400} label="Additional Induction">another 8 weeks</Timer> (total 16 weeks), adventitious shoots from nodule cluster cultures arise.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 2: Establishment & Development (16 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Subculture {convertWeight(0.10, $unitSystem)} nodular cluster cultures over filter paper bridges.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use test tubes (25 mm × 150 mm) containing {convertVolume(15, $unitSystem)} liquid medium.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium:</strong> Same as induction stage but <strong>devoid of <Term abbr="PGR" /></strong> (plant growth regulators).
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Subculture twice at 8-week intervals in PGR-free medium.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 3: Multiplication with Thidiazuron">
		<div class="info-box">
			<strong>Why Thidiazuron (TDZ)?</strong>
			<p>TDZ is more cost-effective than traditional BAP/NAA combinations. At lower concentrations compared to BAP and NAA, TDZ significantly reduces overall production costs while maintaining high multiplication rates.</p>
		</div>
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Subculture {convertWeight(0.5, $unitSystem)} nodular cluster cultures in 300 mL flasks.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use {convertVolume(25, $unitSystem)} liquid medium per flask.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Thidiazuron" /> (0.1 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Culture for multiplication cycle (duration varies by response).
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 4: Elongation (12 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Subculture 8-10 microshoot clusters per 300 mL flask.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use {convertVolume(15, $unitSystem)} liquid medium per flask.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="GA₃" /> (10 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Shoots elongate over <Timer duration={7257600} label="Elongation">12 weeks</Timer> to ≥3 cm for acclimatization.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 5: Acclimatization (8 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Transfer shoots &gt;3 cm to trays of 128 cells (60 cm³ each).
			</li>
			<li>
				<span class="step-number">Step 2</span>
				<strong>Substrate composition:</strong> 2:1:1 (v:v:v) Plantmax® HA : pine bark : carbonized rice coat
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Place trays in greenhouse with controlled mist and 50% shade.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Weekly spray with ¼ <Term abbr="MS" /> salts solution.
			</li>
			<li>
				<span class="step-number">Step 5</span>
				<strong>Duration:</strong> <Timer duration={4838400} label="Acclimatization">8 weeks</Timer>
			</li>
			<li>
				<span class="step-number">Step 6</span>
				<strong>Survival rate:</strong> 95%
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Vriesea Hormone Comparison">
		<p class="microcopy">Compare hormone regimes across Vriesea species from the PDF benchmark.</p>
		<div class="data-table-wrapper">
			<table class="data-table compact">
				<thead>
					<tr>
						<th>Species</th>
						<th>Induction</th>
						<th>Multiplication</th>
						<th>Elongation</th>
					</tr>
				</thead>
				<tbody>
					{#each hormoneComparison as row}
						<tr>
							<td>{row.species}</td>
							<td>{row.induction}</td>
							<td>{row.multiplication}</td>
							<td>{row.elongation}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>Low hormone induction:</strong> NAA and BAP at 1-2 μM concentrations prevent hyperhydricity</li>
			<li><strong>PGR-free establishment:</strong> Extended period without hormones stabilizes cultures</li>
			<li><strong>TDZ efficiency:</strong> Very low concentration (0.1 μM) provides effective multiplication at reduced cost</li>
			<li><strong>GA₃ elongation:</strong> Essential for achieving minimum 3 cm shoot length</li>
			<li><strong>Substrate mix:</strong> Three-component substrate provides excellent drainage and nutrition</li>
			<li><strong>High survival:</strong> 95% success rate when minimum shoot size is achieved</li>
		</ul>
	</ContentBlock>
</ProtocolLayout>

<style>
	.info-box {
		background: var(--info-bg, #e8f4f8);
		border-left: 4px solid var(--accent-color, #4a9f7c);
		padding: 1rem;
		margin: 1rem 0;
	}
	
	.info-box strong {
		display: block;
		margin-bottom: 0.5rem;
		color: var(--accent-color, #4a9f7c);
	}
	
	.info-box p {
		margin: 0;
		line-height: 1.6;
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

	.data-table.compact tbody td {
		font-size: 0.85rem;
		padding: 0.65rem;
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
