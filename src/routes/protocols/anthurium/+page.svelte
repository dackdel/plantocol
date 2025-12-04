<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';
	
	const title = 'Anthurium andreanum<br>cv Rubrun';
	const badges = [
		'Micropropagation',
		'BA: 2 mg/L',
		'Organogenesis'
	];
	const introColumns = [
		'Anthuriums have been cultivated for many decades as cut flowers. They are relatively easy to grow and have attractive foliage. Under ideal conditions, Anthuriums produce long-lasting flowers year round. The reference workflow follows Oropeza et al. in Jain & Ochatt (2010).',
		'Tissue culture has become a routine technique for plant propagation, revolutionizing the ornamental industry. Today, virtually all pot-type Anthuriums available in the market are produced by various tissue culture techniques.',
		'Plant regeneration has been achieved through adventitious shoot formation from callus, axillary buds, root explants, and direct shoot regeneration from lamina explants.'
	];

	const msComponents = [
		{ component: 'NH₄NO₃', stock: '82.5 g/L', volume: '20 mL', final: '1,650 mg/L' },
		{ component: 'KNO₃', stock: '95.0 g/L', volume: '20 mL', final: '1,900 mg/L' },
		{ component: 'CaCl₂·2H₂O', stock: '88.0 g/L', volume: '5 mL', final: '440 mg/L' },
		{ component: 'KH₂PO₄', stock: '34 g/L', volume: '5 mL', final: '170 mg/L' },
		{ component: 'MgSO₄·7H₂O', stock: '74 g/L', volume: '5 mL', final: '370 mg/L' },
		{ component: 'Fe-EDTA solution', stock: '3.72 & 2.78 g/L', volume: '10 mL', final: '37.2 & 27.8 mg/L' },
		{ component: 'Micronutrient mix', stock: 'Various', volume: '5 mL', final: 'H₃BO₃, KI, Na₂MoO₄, CoCl₂' },
		{ component: 'Vitamins', stock: '1–100 mg/L', volume: 'full strength', final: 'Thiamine, myo-inositol, nicotinic acid, pyridoxine, glycine' },
		{ component: 'Sucrose', stock: '-', volume: '-', finalWeight: 30 }
	];

	const timeline = [
		{ window: 'Stage 1 · Day 0', label: 'Seed Sterilization', notes: '3% NaOCl (15 min) → 1% NaOCl (20 min)' },
		{ window: 'Stage 2 · Weeks 0–2', label: 'Germination', notes: 'MS + BA 0.5 mg/L, continuous light' },
		{ window: 'Stage 3 · Weeks 2–10', label: 'Micropropagation', notes: 'MS + BA 2 mg/L + NAA 0.5 mg/L' },
		{ window: 'Stage 4 · Weeks 10–26', label: 'Organogenesis', notes: 'Callus subculture every 30 days' },
		{ window: 'Stage 5 · Weeks 26–38', label: 'Shoot Development', notes: 'PGR-free MS medium (3 months)' },
		{ window: 'Stage 6 · Weeks 38–42', label: 'Acclimatization', notes: '95% RH → greenhouse' }
	];

	const mediaComparison = [
		{ stage: 'Seed Germination', medium: 'MS + BA 0.5 mg/L', conditions: 'Continuous light, 50 μmol/m²/s, 25°C' },
		{ stage: 'Micropropagation', medium: 'MS + BA 2 mg/L + NAA 0.5 mg/L', conditions: '8 weeks, micro-cuttings' },
		{ stage: 'Callus Induction', medium: 'MS + BA 2 mg/L + NAA 0.5 mg/L', conditions: 'Stem base proliferation' },
		{ stage: 'Organogenesis', medium: 'MS + BA 2 mg/L + NAA 0.5 mg/L', conditions: '4 months, 30-day subcultures' },
		{ stage: 'Shoot Development', medium: 'MS, PGR-free', conditions: '3 months' },
		{ stage: 'Acclimatization', medium: 'Soil:humus (1:1)', conditions: '95% RH, low light, then greenhouse' }
	];

	const source = 'Oropeza et al. in Jain & Ochatt (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Anthurium andreanum Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Basal Medium Reference (MS)">
		<p class="microcopy">Murashige & Skoog (1962) medium composition from the PDF benchmark.</p>
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

	<ContentBlock title="Stage 1: Seed Sterilization & Germination">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Separate fruits from spadixes and sterilize for <Timer duration={900} label="Initial Sterilization">15 min</Timer> in 3% NaOCl.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Rinse 3× with sterile distilled water (<Timer duration={300} label="Rinse">5 min</Timer> each).
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Isolate seeds and sterilize for <Timer duration={1200} label="Seed Sterilization">20 min</Timer> in 1% NaOCl.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Rinse 2× with sterile distilled water (<Timer duration={600} label="Final Rinse">10 min</Timer> each).
			</li>
			<li>
				<span class="step-number">Step 5</span>
				Cultivate 10 seeds per Petri dish on <Term abbr="MS" /> medium + <Term abbr="BA" /> 0.5 mg/L.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Incubate under continuous fluorescent light (50 μmol/m²/s) at {convertTemp(25, $unitSystem)} for <Timer duration={1209600} label="Germination">2 weeks</Timer>.
			</li>
			<li>
				<span class="step-number">Step 7</span>
				<strong>Note:</strong> 74% germination under continuous light vs 30% in darkness.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 2: Micropropagation">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Use in vitro germinated seedlings as explant source.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Culture 4 micro-cuttings per flask on <Term abbr="MS" /> + <Term abbr="BA" /> 2 mg/L + <Term abbr="NAA" /> 0.5 mg/L.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Incubate under continuous fluorescent light (50 μmol/m²/s) at {convertTemp(25, $unitSystem)} for <Timer duration={4838400} label="Micropropagation">8 weeks</Timer>.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Isolate micro-cuttings from 8-week-old plants.
			</li>
			<li>
				<span class="step-number">Step 5</span>
				Shoot development observed <Timer duration={3628800} label="Shoot Development">6 weeks</Timer> later.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 3: Indirect Organogenesis">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				At stem bases of 8-week-old plants from micro-cuttings, callus tissue proliferates.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Take segments approximately 1 × 1 cm of callus tissue.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Subculture on <Term abbr="MS" /> + <Term abbr="BA" /> 2 mg/L + <Term abbr="NAA" /> 0.5 mg/L.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Incubate under continuous fluorescent light (50 μmol/m²/s) at {convertTemp(25, $unitSystem)} for <Timer duration={10368000} label="Organogenesis">4 months</Timer>.
			</li>
			<li>
				<span class="step-number">Step 5</span>
				Subculture on fresh medium at every 30-day interval.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 4: Acclimatization">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Transfer vitroplants to <Term abbr="MS" /> medium without hormones and culture for <Timer duration={7776000} label="PGR-free">3 months</Timer>.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Remove from culture tubes carefully to avoid root damage.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Remove culture medium from roots by washing in running tap water.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Transfer to pots containing soil:organic humus (1:1).
			</li>
			<li>
				<span class="step-number">Step 5</span>
				Keep in chambers with 95% RH and low light intensity (700 μmol/m²/s).
			</li>
			<li>
				<span class="step-number">Step 6</span>
				After <Timer duration={2592000} label="Hardening">1 month</Timer>, transfer plants to greenhouse.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Media by Stage">
		<p class="microcopy">Stage-by-stage media requirements from the PDF benchmark.</p>
		<div class="data-table-wrapper">
			<table class="data-table">
				<thead>
					<tr>
						<th>Stage</th>
						<th>Medium</th>
						<th>Conditions</th>
					</tr>
				</thead>
				<tbody>
					{#each mediaComparison as row}
						<tr>
							<td><strong>{row.stage}</strong></td>
							<td>{row.medium}</td>
							<td>{row.conditions}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>Explant source:</strong> In vitro germinated seeds recommended—greenhouse explants have 0–60% contamination</li>
			<li><strong>Light for germination:</strong> Continuous light gives 74% germination vs 30% in darkness</li>
			<li><strong>Replication:</strong> Culture at least 50 micro-cuttings (5 per flask) for statistical analysis</li>
			<li><strong>Callus size:</strong> Fragments no bigger than 1 cm diameter for histological analysis</li>
			<li><strong>Subculture interval:</strong> 30 days for callus maintenance</li>
			<li><strong>Humidity transition:</strong> 95% RH initially, then gradual reduction in greenhouse</li>
		</ul>
	</ContentBlock>
</ProtocolLayout>

<style>
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
