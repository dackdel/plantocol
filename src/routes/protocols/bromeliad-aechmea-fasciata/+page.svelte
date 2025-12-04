<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Aechmea fasciata<br>Temporary Immersion System';
	const badges = [
		'TIS Protocol',
		'PBZ: 6 μM',
		'Multiplication: 30:1'
	];
	const introColumns = [
		'Aechmea fasciata is propagated using Temporary Immersion Systems (TIS), which have proven highly effective for mass propagation of ornamental bromeliads. The reference workflow follows the Laboratory of Plant Developmental Physiology and Genetics (LFDGV/CCA/UFSC) benchmark described in Jain & Ochatt (2010).',
		'TIS benefits include increased multiplication rates (up to 30:1), improved responses during acclimatization, and decreased production costs through reduced manipulation, labor, space requirements, and fewer containers.',
		'This species requires a higher Paclobutrazol concentration (6 μM) compared to Vriesea brusquensis (2 μM), demonstrating species-specific optimization within the TIS framework.'
	];

	const donorCare = {
		stageLabel: 'Stage 0',
		durationSeconds: 2419200,
		durationText: '4 weeks',
		steps: [
			'Fertilize donor clumps weekly with chelated 30-10-10 (NPK) plus Nitrofoska® to maintain vigorous offshoots.',
			'Syringe-feed each rosette with 10 mL NAA (5 mM) + Vitamin B₁ to stimulate axillary bud formation.',
			'Spray benomyl + mineral oil before moving plants to a phyto-tron (25 ± 2 °C, 16 h photoperiod at 300 μmol/m²/s) for sanitation.'
		]
	};

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

	const tisMediaMatrix = [
		{
			stage: 'Induction',
			duration: 'Weeks 0-8',
			intent: 'Axillary bud awakening on filter bridges',
			formulation: ['MS salts + Morel vitamins', 'Sucrose 3%', 'NAA 2 μM', 'BAP 4 μM']
		},
		{
			stage: 'Multiplication',
			duration: 'Weeks 8-20',
			intent: 'TIS nodular clumps and microshoot proliferation',
			formulation: ['MS salts + Morel vitamins', 'Sucrose 3%', 'PBZ 6 μM (A. fasciata)', 'Immersion 3h : 3 min']
		},
		{
			stage: 'Medium Refresh',
			duration: 'Week 14',
			intent: 'Replace oxidized medium to maintain nutrient flow',
			formulation: ['Fresh multiplication medium', 'Maintain 3h : 3 min cycle']
		},
		{
			stage: 'Elongation',
			duration: 'Weeks 20-26',
			intent: 'Synchronize shoots before ex vitro transfer',
			formulation: ['MS salts + Morel vitamins', 'Sucrose 3%', 'GA₃ 10 μM', 'Continue 3h : 3 min']
		}
	];

	const pbzComparisons = [
		{
			species: 'A. fasciata (TIS)',
			induction: 'MS + NAA 2 μM + BAP 4 μM',
			multiplication: 'MS + PBZ 6 μM (liquid)',
			elongation: 'MS + GA₃ 10 μM'
		},
		{
			species: 'V. brusquensis (TIS)',
			induction: 'Same as A. fasciata',
			multiplication: 'MS + PBZ 2 μM (lower compaction)',
			elongation: 'MS + GA₃ 10 μM'
		},
		{
			species: 'V. fosteriana (encapsulated)',
			induction: 'MS + NAA 2 μM + BAP 4 μM + PBZ 4 μM',
			multiplication: 'TDZ 0.1 μM boosts clusters',
			elongation: 'Hormone-free MS before acclimatization'
		}
	];

	const timeline = [
		{ window: 'Stage 0 · Weeks -4–0', label: 'Donor Conditioning', notes: 'Fertilizer regime + NAA/Thiamine syringe feeds, benomyl sanitation' },
		{ window: 'Stage 1 · Weeks 0–8', label: 'Buds on Filter Bridges', notes: '15 mL induction medium per tube, PBZ-free' },
		{ window: 'Stage 2 · Weeks 8–20', label: 'TIS Multiplication', notes: '300–500 mL medium, immersion 3h : 3 min, refresh at week 6' },
		{ window: 'Stage 3 · Weeks 20–26', label: 'TIS Elongation', notes: 'GA₃ replaces PBZ; shoots reach ≥3 cm' },
		{ window: 'Stage 4 · Weeks 26–32', label: 'Acclimatization', notes: '2:1:1 Plantmax® HA : pine bark : carbonized rice coat + weekly ¼ MS foliar feed' }
	];

	const source = 'Guerra & Dal Vesco (2010) in Jain & Ochatt (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Aechmea fasciata TIS Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="What is a Temporary Immersion System (TIS)?">
		<div class="info-box">
			<p><strong>TIS is a semi-automated bioreactor system</strong> where plant cultures are periodically immersed in liquid medium and then drained back, combining the benefits of liquid culture (better nutrient uptake) with gas exchange of conventional culture.</p>
			<p><strong>Key advantages:</strong></p>
			<ul>
				<li>30:1 multiplication rate (vs 10-15:1 in conventional culture)</li>
				<li>Reduced labor and manipulation</li>
				<li>Lower contamination risk</li>
				<li>Better plantlet quality</li>
				<li>Automated nutrient delivery</li>
			</ul>
		</div>
	</ContentBlock>

	<ContentBlock title="Stage 0: Donor Plant Conditioning">
		<div class="donor-grid">
			<div>
				<p class="duration-label">Duration</p>
				<p class="duration-value">
					<Timer duration={donorCare.durationSeconds} label={donorCare.stageLabel}>{donorCare.durationText}</Timer>
				</p>
			</div>
			<div>
				<p class="duration-label">Benchmark Tasks</p>
				<ul>
					{#each donorCare.steps as step}
						<li>{step}</li>
					{/each}
				</ul>
			</div>
		</div>
		<p class="microcopy">Healthy donor plants drive aseptic success—follow the fertilizer, phyto-tron, and sanitation cadence before excising buds.</p>
	</ContentBlock>

	<ContentBlock title="TIS Equipment Requirements">
		<ul>
			<li><strong>TIS containers:</strong> 300-500 mL capacity bioreactor vessels (e.g., RITA® system or custom apparatus)</li>
			<li><strong>Air pump:</strong> Compressed air source for immersion/drainage</li>
			<li><strong>Timer:</strong> Programmable for 3h:3min cycles</li>
			<li><strong>Tubing & filters:</strong> Sterile air delivery system with 0.22 μm filters</li>
			<li><strong>Culture room:</strong> Standard tissue culture environment ({convertTemp(25, $unitSystem)} ± 2°C, 16h light)</li>
		</ul>
	</ContentBlock>

	<ContentBlock title="Basal Medium Reference (MS + Morel)">
		<p class="microcopy">The PDF lists the full Murashige & Skoog macro/micro salts plus Morel vitamins; keep this reference handy when preparing multi-liter batches.</p>
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

	<ContentBlock title="Stage 1: Initial Induction (8 weeks)">
		<p><em>This stage uses conventional liquid culture before TIS transfer</em></p>
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Inoculate buds over filter paper bridges in test tubes (25 mm × 150 mm).
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use {convertVolume(15, $unitSystem)} liquid medium per tube.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h <Term abbr="photoperiod" /> (50-60 μmol/m²/s), 60% ± 5% RH
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={4838400} label="Initial Induction">8 weeks</Timer>, each bud produces clusters of 5-8 shoots (average 0.5 cm).
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 2: TIS Multiplication (12 weeks)">
		<div class="warning-box">
			<strong>⚠ Critical Setup Requirements</strong>
			<p>Ensure all TIS components are properly sterilized. The timer must be calibrated precisely for 3h stationary : 3min immersion cycles. Compressed air must be filtered through 0.22 μm filters to prevent contamination.</p>
		</div>
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Transfer 8-10 shoot clusters to each TIS unit.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Add 300-500 mL liquid medium per container (volume depends on container type).
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Paclobutrazol" /> (PBZ) (6 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Immersion cycle:</strong> Set timer for 3 hours stationary : 3 minutes immersion
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={3628800} label="First TIS Cycle">6 weeks</Timer>, replace culture medium (becomes dark brown).
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Continue for <Timer duration={3628800} label="Second TIS Cycle">6 more weeks</Timer> with fresh medium (total 12 weeks in TIS).
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="TIS Medium Matrix">
		<p class="microcopy">Use the PDF matrix as the authoritative reference for hormone swaps inside the TIS.</p>
		<div class="data-table-wrapper">
			<table class="data-table">
				<thead>
					<tr>
						<th>Stage</th>
						<th>Window</th>
						<th>Intent</th>
						<th>Formulation</th>
					</tr>
				</thead>
				<tbody>
					{#each tisMediaMatrix as row}
						<tr>
							<td>{row.stage}</td>
							<td>{row.duration}</td>
							<td>{row.intent}</td>
							<td>
								<ul>
									{#each row.formulation as formula}
										<li>{formula}</li>
									{/each}
								</ul>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</ContentBlock>

	<ContentBlock title="Stage 3: TIS Elongation (6 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Replace culture medium in TIS containers.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				<strong>Medium:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="GA₃" /> (10 μM)
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Note:</strong> GA₃ replaces PBZ to synchronously elongate microshoots
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Continue same immersion cycle (3h : 3min).
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={3628800} label="Elongation">6 weeks</Timer>, regeneration rate reaches <strong>30:1</strong>.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Shoots should be ≥3 cm long for acclimatization.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 4: Acclimatization (6 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Remove shoots ≥3 cm from TIS containers.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Gently rinse shoots in tap water to remove residual medium.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Transfer to trays of 128 cells (60 cm³ each).
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Substrate:</strong> 2:1:1 (v:v:v) Plantmax® HA : pine bark : carbonized rice coat
			</li>
			<li>
				<span class="step-number">Step 5</span>
				Place trays in greenhouse with controlled mist and 50% shade.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Weekly spray with ¼ <Term abbr="MS" /> salts solution.
			</li>
			<li>
				<span class="step-number">Step 7</span>
				<strong>Duration:</strong> <Timer duration={3628800} label="Acclimatization">6 weeks</Timer>
			</li>
			<li>
				<span class="step-number">Step 8</span>
				<strong>Expected survival:</strong> High rate due to improved TIS-grown plantlet quality
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="PBZ & Hormone Comparison">
		<p class="microcopy">Directly from the PDF Table 6.2—use this to adjust PBZ or TDZ loads when adapting the TIS for other bromeliads.</p>
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
					{#each pbzComparisons as row}
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

	<ContentBlock title="TIS Maintenance & Troubleshooting">
		<table>
			<thead>
				<tr>
					<th>Issue</th>
					<th>Cause</th>
					<th>Solution</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Medium turns dark brown</td>
					<td>Normal phenolic oxidation</td>
					<td>Replace medium after 6 weeks</td>
				</tr>
				<tr>
					<td>Hyperhydricity (glassy shoots)</td>
					<td>Too much immersion</td>
					<td>Reduce immersion time to 2 min or check drainage</td>
				</tr>
				<tr>
					<td>Slow growth</td>
					<td>Insufficient nutrients</td>
					<td>Replace medium more frequently (4 weeks)</td>
				</tr>
				<tr>
					<td>Contamination</td>
					<td>Air filter failure</td>
					<td>Check 0.22 μm filters, replace if needed</td>
				</tr>
				<tr>
					<td>Uneven multiplication</td>
					<td>Poor air distribution</td>
					<td>Ensure shoots not clumped, redistribute evenly</td>
				</tr>
				<tr>
					<td>Roots forming too early</td>
					<td>Low cytokinin</td>
					<td>Normal - continue protocol, prune to 1cm at transplant</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Protocol Timeline & Multiplication">
		<table>
			<thead>
				<tr>
					<th>Stage</th>
					<th>Duration</th>
					<th>System</th>
					<th>Result</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Induction</td>
					<td>8 weeks</td>
					<td>Conventional liquid</td>
					<td>5-8 shoots per bud</td>
				</tr>
				<tr>
					<td>TIS Multiplication</td>
					<td>12 weeks (2×6)</td>
					<td>TIS with PBZ (6 μM)</td>
					<td>Massive proliferation</td>
				</tr>
				<tr>
					<td>TIS Elongation</td>
					<td>6 weeks</td>
					<td>TIS with GA₃ (10 μM)</td>
					<td>30:1 multiplication rate</td>
				</tr>
				<tr>
					<td>Acclimatization</td>
					<td>6 weeks</td>
					<td>Ex vitro</td>
					<td>High survival</td>
				</tr>
				<tr>
					<td><strong>Total</strong></td>
					<td><strong>32 weeks</strong></td>
					<td colspan="2"><strong>30-fold increase per cycle</strong></td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>Precise timing:</strong> 3h:3min cycle is critical - do not alter without testing</li>
			<li><strong>PBZ concentration:</strong> 6 μM produces compact microshoots ideal for mass multiplication</li>
			<li><strong>Medium renewal:</strong> Replace every 6 weeks to prevent nutrient depletion</li>
			<li><strong>GA₃ synchronization:</strong> Switching to GA₃ synchronizes elongation of all shoots</li>
			<li><strong>Air filtration:</strong> Always use 0.22 μm filters to prevent contamination</li>
			<li><strong>Drainage verification:</strong> Ensure complete drainage between cycles to prevent waterlogging</li>
			<li><strong>Cluster distribution:</strong> Evenly distribute shoots in TIS container for uniform growth</li>
			<li><strong>Economic advantage:</strong> 30:1 rate makes TIS highly cost-effective for commercial production</li>
		</ul>
	</ContentBlock>
</ProtocolLayout>

<style>
	.info-box {
		background: var(--info-bg, #e8f4f8);
		border-left: 4px solid var(--accent-color, #4a9f7c);
		padding: 1.25rem;
		margin: 1rem 0;
	}
	
	.info-box p {
		margin: 0.5rem 0;
		line-height: 1.6;
	}

	.info-box ul {
		margin: 0.5rem 0;
		padding-left: 1.5rem;
	}

	.warning-box {
		background: #fff3cd;
		border-left: 4px solid #ff9800;
		padding: 1.25rem;
		margin: 1rem 0;
	}
	
	.warning-box strong {
		display: block;
		margin-bottom: 0.5rem;
		color: #ff9800;
	}
	
	.warning-box p {
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

	.donor-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1.5rem;
		padding: 1.25rem;
		background: #f6f9fc;
		border-radius: 12px;
		border: 1px solid #e2e8f0;
	}

	.duration-label {
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #718096;
		font-weight: 600;
	}

	.duration-value {
		font-size: 1.45rem;
		font-weight: 600;
		color: #1a202c;
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
