<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';
	
	const title = 'Begonia tuberous<br>Thin Cell Layer Protocol';
	const badges = [
		'TCL System',
		'TDZ: 0.2 mg/L',
		'210 shoots/segment'
	];
	const introColumns = [
		'Begonias demonstrate exceptional responsiveness to tissue culture across multiple species. This protocol utilizes the Thin Cell Layer (TCL) system for high-frequency shoot regeneration from petiole, stem, and floral stalk explants. The reference workflow follows Nhut et al. (2005) in Jain & Ochatt (2010).',
		'The TCL system produces several thousand shoots per sample. By optimizing tissue size and applying improved selection procedures, shoots elongate in 8 weeks with an average of 210 ± 9.7 shoots per segment.',
		'On average, the best treatment allows production of about 10,000 plantlets from the axillary buds of one plant with five petioles within 8 months.'
	];

	const timeline = [
		{ window: 'Stage 1 · Day 0', label: 'Sterilization', notes: '0.1% HgCl₂ for 6 min after 70% EtOH' },
		{ window: 'Stage 2 · Weeks 0–3', label: 'TCL Culture', notes: 'TDZ 0.2 mg/L, shoot initiation' },
		{ window: 'Stage 3 · Weeks 3–8', label: 'Shoot Elongation', notes: 'PGR-free MS medium' },
		{ window: 'Stage 4 · Weeks 8–10', label: 'Further Elongation', notes: 'BA 1.0 mg/L' },
		{ window: 'Stage 5 · Weeks 10–16', label: 'Rooting', notes: 'BA 0.5 mg/L + NAA 0.1 mg/L + AC' },
		{ window: 'Stage 6 · Weeks 16–22', label: 'Acclimatization', notes: '1:1 sand:soil, then greenhouse' }
	];

	const tclComparison = [
		{ explant: 'Petiole TCL', hormone: 'TDZ 0.2 mg/L', shootRate: 'High (210/segment)', notes: 'Best for mass propagation' },
		{ explant: 'Petiole TCL', hormone: 'BA 0.2 + NAA 0.2 mg/L', shootRate: '>75%', notes: 'Alternative combination' },
		{ explant: 'Stem TCL', hormone: 'BA + NAA', shootRate: 'Moderate', notes: '2 mm thick sections' },
		{ explant: 'Floral Stalk TCL', hormone: 'TDZ 0.2 mg/L', shootRate: 'High', notes: 'Position 2 optimal' }
	];

	const tclParameters = [
		{ parameter: 'TCL Thickness', value: '0.2–1.0 mm (3 mm optimal)', notes: 'Affects regeneration rate' },
		{ parameter: 'Culture Vessel', value: '100 mm × 20 mm Petri dish', notes: '40 mL semi-solid medium' },
		{ parameter: 'Temperature', value: '25 ± 2°C', notes: 'Growth chamber' },
		{ parameter: 'Humidity', value: '75–80% RH', notes: 'Controlled environment' },
		{ parameter: 'Light', value: '45 μmol/m²/s PPFD', notes: '10 h photoperiod' },
		{ parameter: 'pH', value: '5.8', notes: 'Adjusted with 1 M KOH' },
		{ parameter: 'Gelling Agent', value: 'Phytagel 2.5 g/L', notes: 'Sigma brand' }
	];

	const source = 'Nhut et al. (2005) in Jain & Ochatt (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Begonia Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
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

	<ContentBlock title="TCL Culture Parameters">
		<p class="microcopy">Critical parameters for successful Thin Cell Layer culture from the PDF benchmark.</p>
		<div class="data-table-wrapper">
			<table class="data-table">
				<thead>
					<tr>
						<th>Parameter</th>
						<th>Value</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					{#each tclParameters as row}
						<tr>
							<td><strong>{row.parameter}</strong></td>
							<td>{row.value}</td>
							<td>{row.notes}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</ContentBlock>

	<ContentBlock title="Sterilization Protocol">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Wash explants with tap water and liquid soap. Duration: <Timer duration={900} label="Soap Wash">10-15 minutes</Timer>.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Rinse thoroughly with running tap water. Duration: <Timer duration={300} label="Tap Water Rinse">5 minutes</Timer>.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<Term abbr="surface sterilization" /> with 1.0-1.5% <Term abbr="sodium hypochlorite" /> plus 2-3 drops <Term abbr="Tween 20" />. Duration: <Timer duration={900} label="Surface Sterilization">10-15 minutes</Timer>.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Rinse with sterile water multiple times. Washes: 3-4 times, <Timer duration={300} label="Sterile Water Rinse">5 minutes</Timer> each.
			</li>
			<li>
				<span class="step-number">Step 5</span>
				Optional: Brief 70% ethanol rinse for <Timer duration={30} label="Ethanol Rinse">30 seconds</Timer> for additional sterilization.
			</li>
		</ol>
	</ContentBlock>
	
	<ContentBlock title="Media Formulations">
		<table>
			<thead>
				<tr>
					<th>Stage</th>
					<th>Components & Conditions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Stage I</strong><br><Term abbr="callus" />/Shoot Induction</td>
					<td><Term abbr="MS" /> {convertWeight(4.44, $unitSystem)}/L • <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L • <Term abbr="BAP" /> 1.0-3.0 mg/L • <Term abbr="NAA" /> 0.1-0.5 mg/L • <Term abbr="Agar" /> {convertWeight(7, $unitSystem)}-{convertWeight(8, $unitSystem)}/L • <Term abbr="pH" /> {displayPH(5.7)}-{displayPH(5.8)}<br><em>Begonias respond particularly well to <Term abbr="cytokinin" />-heavy medium</em></td>
				</tr>
				<tr>
					<td><strong>Stage II</strong><br>Shoot <Term abbr="multiplication" /></td>
					<td><Term abbr="MS" /> {convertWeight(4.44, $unitSystem)}/L • <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L • <Term abbr="BAP" /> 1.0-2.0 mg/L • <Term abbr="NAA" /> 0.1 mg/L • <Term abbr="Agar" /> {convertWeight(7, $unitSystem)}/L • <Term abbr="pH" /> {displayPH(5.7)}-{displayPH(5.8)}<br><em>Lower hormone concentrations promote shoot elongation</em></td>
				</tr>
				<tr>
					<td><strong>Stage III</strong><br><Term abbr="rooting" /></td>
					<td><Term abbr="MS" /> {convertWeight(2.22, $unitSystem)}/L (half-strength) • <Term abbr="Sucrose" /> {convertWeight(20, $unitSystem)}/L • <Term abbr="NAA" /> 0.5-1.0 mg/L • <Term abbr="Agar" /> {convertWeight(7, $unitSystem)}/L • <Term abbr="pH" /> {displayPH(5.7)}-{displayPH(5.8)}<br><em>Begonias root easily with low <Term abbr="auxin" /> concentration</em></td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>
	
	<ContentBlock title="TCL Explant Comparison">
		<p class="microcopy">Compare different explant types and hormone combinations from the PDF benchmark.</p>
		<div class="data-table-wrapper">
			<table class="data-table compact">
				<thead>
					<tr>
						<th>Explant Type</th>
						<th>Hormone</th>
						<th>Shoot Rate</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					{#each tclComparison as row}
						<tr>
							<td>{row.explant}</td>
							<td>{row.hormone}</td>
							<td>{row.shootRate}</td>
							<td>{row.notes}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</ContentBlock>

	<ContentBlock title="Rooting & Acclimatization">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Adventitious shoots 1–1.5 cm high with 3–4 leaves are transferred to rooting medium.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				<strong>Rooting medium:</strong> <Term abbr="MS" /> + <Term abbr="BA" /> 0.5 mg/L + <Term abbr="NAA" /> 0.1 mg/L + activated charcoal 1 g/L
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Roots develop after <Timer duration={3888000} label="Rooting">45 days</Timer> of culture.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Transfer plantlets to sterile moistened sand:soil (1:1), pH 5.8, in jam bottles.
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={3024000} label="Hardening">5–6 weeks</Timer>, transfer to polybags with same potting mixture.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Keep in greenhouse at {convertTemp(25, $unitSystem)} and 80% humidity.
			</li>
			<li>
				<span class="step-number">Step 7</span>
				Plantlets adapt well and flower after <Timer duration={15552000} label="Flowering">6 months</Timer>.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>TCL thickness:</strong> 3 mm recommended for high shoot formation frequency and uniform shoots</li>
			<li><strong>TDZ concentration:</strong> Low concentration (&lt;0.2 mg/L) effective for caulogenesis from petiole tTCLs</li>
			<li><strong>BA alone:</strong> Highest shoot formation (56.67%) recorded with 1.0 mg/L BA</li>
			<li><strong>BA + NAA:</strong> Shoot formation over 75% when both used at low concentrations</li>
			<li><strong>Floral stalk position:</strong> Position 2 gives highest regeneration rate</li>
			<li><strong>Mass propagation:</strong> ~10,000 plantlets from one plant with 5 petioles in 8 months</li>
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
