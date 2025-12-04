<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Vriesea fosteriana<br>Large Ornamental';
	const badges = [
		'TDZ Protocol',
		'PBZ: 4 μM',
		'Encapsulation Available'
	];
	const introColumns = [
		'Vriesea fosteriana is a large bromeliad species spreading from Brazil to Mexico. It shows broad, mid-green leaves with a reddish-brown band on both sides. The foliage can grow up to 1-m long forming a dense rosette. The reference workflow follows the LFDGV/CCA/UFSC benchmark described in Jain & Ochatt (2010).',
		'From the center a conspicuous flower stalk reaches upwards to 1.5 m, developing a yellow flower from each bract. This species is highly valued in ornamental horticulture.',
		'Two protocols are provided: standard TDZ multiplication for mass propagation, and an innovative encapsulation protocol for synthetic seed production and long-term storage.'
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

	const timelineStandard = [
		{ window: 'Stage 1 · Weeks 0–28', label: 'Induction', notes: 'NAA 2 μM + BAP 4 μM, 3× subculture at 6-week intervals' },
		{ window: 'Stage 2 · Variable', label: 'Multiplication', notes: 'TDZ 0.1 μM, 14:1 multiplication rate' },
		{ window: 'Stage 3 · Weeks 28–38', label: 'Elongation', notes: 'PGR-free MS medium' },
		{ window: 'Stage 4 · Weeks 38–47', label: 'Acclimatization', notes: '2:1:1 substrate, 98% survival' }
	];

	const timelineEncapsulation = [
		{ window: 'Prep · Weeks 0–24', label: 'Standard Multiplication', notes: '3-4 subcultures at 5-7 week intervals' },
		{ window: 'Stage 1 · Weeks 24–32', label: 'PBZ Induction', notes: 'NAA 2 μM + BAP 4 μM + PBZ 4 μM, 13:1 rate' },
		{ window: 'Stage 2 · Day 1', label: 'Encapsulation', notes: '1% alginate + ½ MS + GA₃ 5 μM, 10 min CaCl₂' },
		{ window: 'Stage 3 · Weeks 32–36', label: 'Cold Storage', notes: '5°C for 4 weeks' },
		{ window: 'Stage 4 · Weeks 36–41', label: 'Ex Vitro Conversion', notes: 'Vermiculite in phytotron, ¼ MS foliar' },
		{ window: 'Stage 5 · Weeks 41–49', label: 'Final Acclimatization', notes: '85% survival, then 10 more weeks in greenhouse' }
	];

	const protocolComparison = [
		{ aspect: 'Multiplication Rate', standard: '14:1', encapsulation: '13:1' },
		{ aspect: 'Survival Rate', standard: '98%', encapsulation: '85%' },
		{ aspect: 'Storage Capability', standard: 'Limited', encapsulation: '4 weeks at 5°C' },
		{ aspect: 'Acclimatization', standard: 'In vitro → ex vitro', encapsulation: 'Direct ex vitro' },
		{ aspect: 'Key Advantage', standard: 'Higher survival', encapsulation: 'Storage & transport' },
		{ aspect: 'Best For', standard: 'Mass propagation', encapsulation: 'Germplasm conservation' }
	];

	const encapsulationMatrix = [
		{ step: 'Alginate Matrix', composition: '1% sodium alginate in ½ MS + GA₃ 5 μM' },
		{ step: 'Complexation', composition: '50 mM CaCl₂ for 10 minutes' },
		{ step: 'Decomplexation', composition: '100 mM KNO₃ for 20 minutes before sowing' },
		{ step: 'Sowing Substrate', composition: 'Vermiculite in 220-cell trays (13 cm³ each)' }
	];

	const source = 'Guerra & Dal Vesco (2010) in Jain & Ochatt (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Vriesea fosteriana Protocol - Plantocol</title>
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

	<ContentBlock title="Standard Protocol Timeline (PDF Benchmark)">
		<div class="timeline-grid">
			{#each timelineStandard as item}
				<div class="timeline-card">
					<p class="timeline-window">{item.window}</p>
					<p class="timeline-label">{item.label}</p>
					<p class="timeline-notes">{item.notes}</p>
				</div>
			{/each}
		</div>
	</ContentBlock>

	<ContentBlock title="Standard Protocol: Direct Organogenesis with TDZ">
		<div class="protocol-section">
			<h4>Stage 1: Induction (10 weeks + 18 weeks subculture)</h4>
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
					After <Timer duration={6048000} label="Initial Induction">10 weeks</Timer>, nodule cluster cultures arise.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					Subculture 3 times, every 6 weeks, in same medium (total 18 more weeks).
				</li>
			</ol>

			<h4>Stage 2: Multiplication with TDZ</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture 5-8 microshoot clusters per 300 mL flask.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(15, $unitSystem)} liquid medium per flask.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="TDZ" /> (0.1 μM)
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Multiplication rate:</strong> 14:1
				</li>
			</ol>

			<h4>Stage 3: Elongation (10 weeks)</h4>
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
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L, <strong>free of <Term abbr="PGR" /></strong>
				</li>
			</ol>

			<h4>Stage 4: Acclimatization (9 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Transfer shoots ≥3.0 cm to trays of 128 cells (60 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Substrate:</strong> 2:1:1 (v:v:v) Plantmax® HA : pine bark : carbonized rice coat
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Nebulization tunnel, <Timer duration={5443200} label="Acclimatization">9 weeks</Timer>.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Survival rate:</strong> 98%
				</li>
			</ol>
		</div>
	</ContentBlock>

	<ContentBlock title="Encapsulation Protocol: Synthetic Seed Production">
		<div class="protocol-section">
			<h4>Preparation: Standard Multiplication (24 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Follow standard induction protocol (see above).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					After 3-4 subcultures (5-7 weeks each), achieve multiple shoot proliferation.
				</li>
			</ol>

			<h4>Induction of Encapsulated Units (8 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture 5-8 clusters in 300 mL flasks with {convertVolume(20, $unitSystem)} medium.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM) + <Term abbr="Paclobutrazol" /> (4.0 μM)
				</li>
				<li>
					<span class="step-number">Step 3</span>
					After <Timer duration={4838400} label="PBZ Treatment">8 weeks</Timer>, multiplication rate reaches 13:1.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					Select shoots 0.5-1.0 cm long for encapsulation.
				</li>
			</ol>

			<h4>Encapsulation Process</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					<strong>Prepare alginate matrix:</strong> 1% sodium alginate in ½ strength <Term abbr="MS" /> salts + <Term abbr="GA₃" /> (5 μM)
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Immerse individual shoots (0.5-1.0 cm) in alginate solution.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Complexation:</strong> Drop alginate-coated shoots into 50 mM CaCl₂ solution.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					Maintain in CaCl₂ for <Timer duration={600} label="Complexation">10 minutes</Timer> to form gel beads.
				</li>
				<li>
					<span class="step-number">Step 5</span>
					Wash encapsulated units thoroughly in tap water.
				</li>
				<li>
					<span class="step-number">Step 6</span>
					<strong>Storage:</strong> Store capsules at {convertTemp(5, $unitSystem)} for <Timer duration={2419200} label="Cold Storage">4 weeks</Timer>.
				</li>
			</ol>

			<h4>Decomplexation & Sowing</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Treat capsules with 100 mM KNO₃ solution for <Timer duration={1200} label="Decomplexation">20 minutes</Timer> before sowing.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Transfer synthetic seeds to trays of 220 cells (13 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Substrate:</strong> Vermiculite
				</li>
			</ol>

			<h4>Ex Vitro Conversion in Phytotron</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Place trays inside plastic boxes covered with glass to allow light entry and reduce water exchange.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h light (400 μmol/m²/s)
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Periodically wet germinating capsules with ¼ <Term abbr="MS" /> salts solution.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					After <Timer duration={3024000} label="Initial Germination">5 weeks</Timer>, transfer trays to greenhouse.
				</li>
			</ol>

			<h4>Final Acclimatization (8 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Transfer plantlets to trays of 128 cells (60 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Substrate:</strong> 1:1 (v:v) carbonized rice coat + Turfa Fértil® (N:4%, P₂O₅:14%, K₂O:8%)
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Nebulization tunnel with intermittent mist.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Duration:</strong> <Timer duration={4838400} label="Final Acclim">8 weeks</Timer>
				</li>
				<li>
					<span class="step-number">Step 5</span>
					<strong>Survival rate:</strong> 85%
				</li>
				<li>
					<span class="step-number">Step 6</span>
					Transfer to pots and maintain in greenhouse for <Timer duration={6048000} label="Greenhouse">10 more weeks</Timer>.
				</li>
			</ol>
		</div>
	</ContentBlock>

	<ContentBlock title="Encapsulation Timeline (PDF Benchmark)">
		<div class="timeline-grid">
			{#each timelineEncapsulation as item}
				<div class="timeline-card">
					<p class="timeline-window">{item.window}</p>
					<p class="timeline-label">{item.label}</p>
					<p class="timeline-notes">{item.notes}</p>
				</div>
			{/each}
		</div>
	</ContentBlock>

	<ContentBlock title="Encapsulation Matrix">
		<p class="microcopy">Critical steps for synthetic seed production from the PDF benchmark.</p>
		<div class="data-table-wrapper">
			<table class="data-table">
				<thead>
					<tr>
						<th>Step</th>
						<th>Composition</th>
					</tr>
				</thead>
				<tbody>
					{#each encapsulationMatrix as row}
						<tr>
							<td><strong>{row.step}</strong></td>
							<td>{row.composition}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol Comparison">
		<p class="microcopy">Choose standard protocol for maximum survival or encapsulation for storage and transport.</p>
		<div class="data-table-wrapper">
			<table class="data-table">
				<thead>
					<tr>
						<th>Aspect</th>
						<th>Standard TDZ</th>
						<th>Encapsulation</th>
					</tr>
				</thead>
				<tbody>
					{#each protocolComparison as row}
						<tr>
							<td><strong>{row.aspect}</strong></td>
							<td>{row.standard}</td>
							<td>{row.encapsulation}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>TDZ efficiency:</strong> Very low concentration (0.1 μM) reduces costs significantly vs BAP/NAA</li>
			<li><strong>PBZ treatment:</strong> Paclobutrazol produces compact shoots ideal for encapsulation</li>
			<li><strong>Shoot size for encapsulation:</strong> 0.5-1.0 cm optimal for alginate bead formation</li>
			<li><strong>Complexation time:</strong> Exactly 10 minutes in CaCl₂ ensures proper gel formation</li>
			<li><strong>Cold storage:</strong> 4 weeks at 5°C extends viability and synchronizes germination</li>
			<li><strong>Decomplexation:</strong> KNO₃ treatment essential before sowing to soften alginate matrix</li>
			<li><strong>Ex vitro germination:</strong> Vermiculite + phytotron conditions allow direct conversion without traditional tissue culture</li>
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
