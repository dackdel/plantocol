<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Vriesea brusquensis<br>Temporary Immersion System';
	const badges = [
		'TIS Protocol',
		'PBZ: 2 μM',
		'Mass Propagation'
	];
	const introColumns = [
		'Vriesea brusquensis is propagated using Temporary Immersion Systems (TIS), an advanced technique for mass propagation of bromeliads. The reference workflow follows the Laboratory of Plant Developmental Physiology and Genetics (LFDGV/CCA/UFSC) benchmark described in Jain & Ochatt (2010).',
		'TIS offers significant advantages over conventional tissue culture including increased multiplication rates, improved acclimatization responses, and decreased production costs through reduced manipulation, labor, and container requirements.',
		'This species requires a lower Paclobutrazol concentration (2 μM) compared to Aechmea fasciata (6 μM), demonstrating species-specific optimization within the TIS framework.'
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
			duration: 'Weeks 0-9',
			intent: 'Axillary bud awakening on filter bridges',
			formulation: ['MS salts + Morel vitamins', 'Sucrose 3%', 'NAA 2 μM', 'BAP 4 μM']
		},
		{
			stage: 'Multiplication',
			duration: 'Weeks 9-18',
			intent: 'TIS nodular clumps and microshoot proliferation',
			formulation: ['MS salts + Morel vitamins', 'Sucrose 3%', 'PBZ 2 μM (V. brusquensis)', 'Immersion 3h : 3 min']
		},
		{
			stage: 'Medium Refresh',
			duration: 'Week 18',
			intent: 'Replace oxidized medium to maintain nutrient flow',
			formulation: ['Fresh multiplication medium', 'Maintain 3h : 3 min cycle']
		},
		{
			stage: 'Elongation',
			duration: 'Weeks 18-24',
			intent: 'Synchronize shoots before ex vitro transfer',
			formulation: ['MS salts + Morel vitamins', 'Sucrose 3%', 'GA₃ 10 μM', 'Continue 3h : 3 min']
		}
	];

	const pbzComparisons = [
		{
			species: 'V. brusquensis (TIS)',
			induction: 'MS + NAA 2 μM + BAP 4 μM',
			multiplication: 'MS + PBZ 2 μM (liquid)',
			elongation: 'MS + GA₃ 10 μM'
		},
		{
			species: 'Aechmea fasciata (TIS)',
			induction: 'Same as V. brusquensis',
			multiplication: 'MS + PBZ 6 μM (higher compaction tolerance)',
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
		{ window: 'Stage 1 · Weeks 0–9', label: 'Buds on Filter Bridges', notes: '15 mL induction medium per tube, PBZ-free' },
		{ window: 'Stage 2 · Weeks 9–18', label: 'TIS Multiplication', notes: '300–500 mL medium, immersion 3h : 3 min, refresh at week 6' },
		{ window: 'Stage 3 · Weeks 18–24', label: 'TIS Elongation', notes: 'GA₃ replaces PBZ; shoots reach ≥3 cm' },
		{ window: 'Stage 4 · Weeks 24–33', label: 'Acclimatization', notes: '2:1:1 Plantmax® HA : pine bark : carbonized rice coat + weekly ¼ MS foliar feed' }
	];

	const source = 'Guerra & Dal Vesco (2010) in Jain & Ochatt (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Vriesea brusquensis TIS Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Temporary Immersion System Overview">
		<div class="info-box">
			<p><strong>TIS Technology</strong> provides automated periodic immersion of plant cultures in liquid medium, combining optimal nutrient delivery with excellent gas exchange. The system drastically improves multiplication efficiency.</p>
			<p><strong>Key Benefits for V. brusquensis:</strong></p>
			<ul>
				<li>High multiplication rates (up to 30:1)</li>
				<li>Synchronized shoot development</li>
				<li>Reduced labor and contamination risk</li>
				<li>Superior plantlet quality for acclimatization</li>
				<li>Economically viable for commercial production</li>
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

	<ContentBlock title="TIS Equipment Setup">
		<ul>
			<li><strong>Bioreactor containers:</strong> 300-500 mL capacity TIS vessels
				<ul>
					<li>RITA® apparatus (commercial)</li>
					<li>Custom LFDGV/CCA/UFSC apparatus</li>
					<li>Standard TIS systems</li>
				</ul>
			</li>
			<li><strong>Air delivery system:</strong> Compressed air with 0.22 μm sterile filtration</li>
			<li><strong>Programmable timer:</strong> Precise 3h stationary : 3min immersion cycles</li>
			<li><strong>Culture environment:</strong> Standard tissue culture room ({convertTemp(25, $unitSystem)} ± 2°C, 16h photoperiod)</li>
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
		<p><em>Conventional liquid culture before TIS transfer</em></p>
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
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Culture conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h light (50-60 μmol/m²/s), 60% ± 5% RH
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={4838400} label="Initial Induction">8 weeks</Timer>, clusters containing 5-8 shoots (average 0.5 cm) are obtained.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 2: TIS Multiplication (12 weeks)">
		<div class="highlight-box">
			<strong>Species-Specific PBZ Concentration</strong>
			<p>Vriesea brusquensis requires only 2 μM Paclobutrazol, compared to 6 μM for Aechmea fasciata. This lower concentration prevents over-compaction while still promoting healthy microshoot proliferation.</p>
		</div>
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Transfer 8-10 shoot clusters to each TIS unit under aseptic conditions.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Add 300-500 mL liquid medium per container (volume varies by container type).
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Paclobutrazol" /> (PBZ) (2 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Immersion cycle:</strong> Program timer for 3 hours stationary : 3 minutes immersion
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={3628800} label="First Period">6 weeks</Timer>, replace culture medium (which normally acquires a dark-brown color due to phenolic oxidation).
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Continue for <Timer duration={3628800} label="Second Period">6 more weeks</Timer> with fresh medium (total 12 weeks in multiplication).
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
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="GA₃" /> (10 μM)
			</li>
			<li>
				<span class="step-number">Step 3</span>
				GA₃ replaces PBZ to synchronously elongate the microshoots.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Continue same immersion cycle (3h stationary : 3min immersion).
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={3628800} label="Elongation">6 weeks</Timer>, regeneration rate may reach <strong>30:1</strong>.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Shoots should be ≥3 cm long and ready for acclimatization.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 4: Acclimatization (6 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Carefully remove shoots ≥3 cm from TIS containers.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Gently rinse shoots in tap water to remove residual culture medium.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				If roots are present, prune to approximately 1 cm length (roots not essential for success).
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Transfer to trays of 128 cells (60 cm³ per cell).
			</li>
			<li>
				<span class="step-number">Step 5</span>
				<strong>Substrate composition:</strong> 2:1:1 (v:v:v) Plantmax® HA : pine bark : carbonized rice coat
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Place trays in greenhouse with controlled mist system.
			</li>
			<li>
				<span class="step-number">Step 7</span>
				Provide 50% shade using shade cloth or greenhouse screening.
			</li>
			<li>
				<span class="step-number">Step 8</span>
				Weekly spray with ¼ <Term abbr="MS" /> salts solution for nutrition.
			</li>
			<li>
				<span class="step-number">Step 9</span>
				<strong>Duration:</strong> <Timer duration={3628800} label="Acclimatization">6 weeks</Timer> in controlled mist environment
			</li>
			<li>
				<span class="step-number">Step 10</span>
				<strong>Expected outcome:</strong> High survival rate due to superior TIS-produced plantlet quality
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

	<ContentBlock title="Comparison: V. brusquensis vs A. fasciata TIS">
		<table>
			<thead>
				<tr>
					<th>Parameter</th>
					<th>V. brusquensis</th>
					<th>A. fasciata</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Induction</strong></td>
					<td>8 weeks, NAA + BAP</td>
					<td>8 weeks, NAA + BAP</td>
				</tr>
				<tr>
					<td><strong>PBZ Concentration</strong></td>
					<td>2 μM</td>
					<td>6 μM</td>
				</tr>
				<tr>
					<td><strong>Multiplication Duration</strong></td>
					<td>12 weeks</td>
					<td>12 weeks</td>
				</tr>
				<tr>
					<td><strong>GA₃ Elongation</strong></td>
					<td>10 μM, 6 weeks</td>
					<td>10 μM, 6 weeks</td>
				</tr>
				<tr>
					<td><strong>Immersion Cycle</strong></td>
					<td>3h : 3min</td>
					<td>3h : 3min</td>
				</tr>
				<tr>
					<td><strong>Multiplication Rate</strong></td>
					<td>Up to 30:1</td>
					<td>Up to 30:1</td>
				</tr>
				<tr>
					<td><strong>Total Time</strong></td>
					<td>32 weeks</td>
					<td>32 weeks</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="TIS Operation & Troubleshooting">
		<div class="troubleshooting-grid">
			<div>
				<h4>Normal Observations</h4>
				<ul>
					<li><strong>Medium color:</strong> Dark brown after 6 weeks is normal (phenolic oxidation)</li>
					<li><strong>Shoot clusters:</strong> Will increase in density during multiplication phase</li>
					<li><strong>Root formation:</strong> Some adventitious roots may form - this is normal</li>
					<li><strong>Shoot size variation:</strong> GA₃ treatment synchronizes elongation</li>
				</ul>
			</div>
			<div>
				<h4>Common Issues & Solutions</h4>
				<ul>
					<li><strong>Hyperhydricity:</strong> Reduce immersion time or check drainage system</li>
					<li><strong>Slow growth:</strong> Replace medium more frequently (every 4 weeks)</li>
					<li><strong>Contamination:</strong> Check air filter (0.22 μm) integrity, replace if needed</li>
					<li><strong>Uneven development:</strong> Redistribute shoots evenly in container</li>
					<li><strong>Chlorosis:</strong> Increase light intensity or check nutrient levels</li>
				</ul>
			</div>
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol Timeline Summary">
		<table>
			<thead>
				<tr>
					<th>Week</th>
					<th>Stage</th>
					<th>Action</th>
					<th>Medium</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>0-8</td>
					<td>Induction</td>
					<td>Conventional liquid culture</td>
					<td>MS + NAA (2 μM) + BAP (4 μM)</td>
				</tr>
				<tr>
					<td>8-14</td>
					<td>TIS Multiplication 1</td>
					<td>First TIS cycle</td>
					<td>MS + PBZ (2 μM)</td>
				</tr>
				<tr>
					<td>14</td>
					<td>Medium Change</td>
					<td>Replace dark medium</td>
					<td>Fresh MS + PBZ (2 μM)</td>
				</tr>
				<tr>
					<td>14-20</td>
					<td>TIS Multiplication 2</td>
					<td>Second TIS cycle</td>
					<td>MS + PBZ (2 μM)</td>
				</tr>
				<tr>
					<td>20-26</td>
					<td>TIS Elongation</td>
					<td>Synchronous elongation</td>
					<td>MS + GA₃ (10 μM)</td>
				</tr>
				<tr>
					<td>26-32</td>
					<td>Acclimatization</td>
					<td>Ex vitro establishment</td>
					<td>2:1:1 substrate, mist system</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>PBZ optimization:</strong> 2 μM is species-specific for V. brusquensis - do not use A. fasciata concentration</li>
			<li><strong>Cycle precision:</strong> Maintain exact 3h:3min timing for optimal results</li>
			<li><strong>Medium replacement:</strong> Essential at 6-week intervals to prevent nutrient depletion</li>
			<li><strong>GA₃ synchronization:</strong> Switching to GA₃ ensures uniform shoot elongation across entire culture</li>
			<li><strong>Sterile air filtration:</strong> Always use 0.22 μm filters to prevent airborne contamination</li>
			<li><strong>Complete drainage:</strong> Verify system drains fully between cycles to prevent waterlogging</li>
			<li><strong>Shoot distribution:</strong> Evenly space clusters in TIS container for uniform access to medium</li>
			<li><strong>Minimum size:</strong> Only transfer shoots ≥3 cm to acclimatization for maximum survival</li>
			<li><strong>Economic viability:</strong> 30:1 multiplication rate makes TIS highly cost-effective for commercial scale</li>
		</ul>
	</ContentBlock>
</ProtocolLayout>

<style>
	.info-box {
		background: #fafafa;
		border-left: 2px solid #000;
		padding: 1rem;
		margin: 1rem 0;
	}
	
	.info-box p {
		margin: 0.5rem 0;
		line-height: 1.6;
		color: #333;
	}

	.info-box ul {
		margin: 0.5rem 0;
		padding-left: 1.5rem;
	}

	.highlight-box {
		background: #fafafa;
		color: #000;
		padding: 1rem;
		margin: 1rem 0;
		border: 1px solid #e5e5e5;
	}
	
	.highlight-box strong {
		display: block;
		margin-bottom: 0.5rem;
		font-size: 1rem;
		color: #000;
	}
	
	.highlight-box p {
		margin: 0;
		line-height: 1.6;
		color: #333;
	}

	.troubleshooting-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin-top: 1rem;
	}

	.troubleshooting-grid h4 {
		color: #000;
		margin: 0 0 0.5rem 0;
		font-size: 15px;
	}

	.troubleshooting-grid ul {
		margin: 0;
		padding-left: 1.25rem;
	}

	.troubleshooting-grid li {
		margin: 0.4rem 0;
	}

	.microcopy {
		font-size: 14px;
		font-weight: 500;
		letter-spacing: -0.01em;
		color: #666;
		margin-bottom: 0.5rem;
	}

	.donor-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		padding: 1rem;
		background: #fafafa;
		border: 1px solid #e5e5e5;
	}

	.duration-label {
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #666;
		font-weight: 600;
	}

	.duration-value {
		font-size: 1.25rem;
		font-weight: 600;
		color: #000;
	}

	.data-table-wrapper {
		overflow-x: auto;
		margin-top: 1rem;
	}

	.data-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 14px;
		border-spacing: 0;
	}

	.data-table thead th {
		font-size: 12px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #000;
		font-weight: 600;
		padding: 12px 10px;
		border-top: 1px solid #000;
		border-bottom: 1px solid #000;
		background: #fafafa;
	}

	.data-table tbody td {
		padding: 12px 10px;
		border-bottom: 1px solid #e5e5e5;
		color: #333;
	}

	.data-table tbody tr:nth-child(odd) td {
		background: #fafafa;
	}

	.data-table.compact tbody td {
		font-size: 13px;
		padding: 10px 8px;
	}

	.timeline-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 12px;
		margin-top: 1rem;
	}

	.timeline-card {
		border: 1px solid #e5e5e5;
		padding: 1rem;
		background: #fff;
	}

	.timeline-window {
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #666;
		font-weight: 600;
	}

	.timeline-label {
		font-size: 16px;
		font-weight: 600;
		margin: 0.25rem 0;
		color: #000;
	}

	.timeline-notes {
		font-size: 14px;
		color: #333;
		line-height: 1.5;
	}

	.step-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.step-list li {
		margin-bottom: 0.75rem;
	}

	.step-number {
		font-weight: 600;
		margin-right: 0.5rem;
		color: #000;
	}
</style>
