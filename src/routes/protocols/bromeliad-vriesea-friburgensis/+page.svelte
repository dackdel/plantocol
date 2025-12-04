<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Vriesea friburgensis<br>var. paludosa';
	const badges = [
		'Threatened Species',
		'2-iP: 12 μM',
		'Nodule Cluster Culture'
	];
	const introColumns = [
		'Vriesea friburgensis var. paludosa is found in epiphytic or terrestrial habitats in southern and southeastern Brazilian Atlantic Forest. They grow preferentially as terrestrials in sandy, dry seacoast soils with sand dune vegetation. The reference workflow follows the LFDGV/CCA/UFSC benchmark described in Jain & Ochatt (2010).',
		'This species forms dense groups and is typically helophytic but capable of surviving under diffuse light with few air humidity requirements. In its natural habitat, this bromeliad is threatened by extinction.',
		'The protocol uses nodule cluster regeneration with 2,4-D/Kin induction followed by 2-iP multiplication, providing an efficient system for conservation and mass propagation.'
	];

	const timeline = [
		{ window: 'Stage 1 · Weeks 0–13', label: 'Induction', notes: '2,4-D 5 μM + Kinetin 1 μM on agar' },
		{ window: 'Stage 2 · Variable', label: 'Establishment', notes: 'PGR-free liquid medium' },
		{ window: 'Stage 3 · Weeks 13–22', label: 'Multiplication', notes: '2-iP 12 μM, microshoot clusters' },
		{ window: 'Stage 4 · Weeks 22–30', label: 'Elongation', notes: 'GA₃ 5 μM, 2× 4-week subcultures' },
		{ window: 'Stage 5 · Weeks 30–39', label: 'Acclimatization', notes: '1:1 substrate, 9 weeks in mist' }
	];

	const hormoneMatrix = [
		{ stage: 'Induction', hormone: '2,4-D 5 μM + Kinetin 1 μM', medium: 'Agar (solid)', duration: '13 weeks' },
		{ stage: 'Establishment', hormone: 'PGR-free', medium: 'Liquid', duration: 'Variable' },
		{ stage: 'Multiplication', hormone: '2-iP 12 μM', medium: 'Liquid', duration: '9 weeks' },
		{ stage: 'Elongation', hormone: 'GA₃ 5 μM', medium: 'Liquid', duration: '8 weeks (2×4)' },
		{ stage: 'Acclimatization', hormone: 'N/A', medium: '1:1 substrate', duration: '9 weeks' }
	];

	const source = 'Guerra & Dal Vesco (2010) in Jain & Ochatt (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Vriesea friburgensis Protocol - Plantocol</title>
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

	<ContentBlock title="Hormone Matrix">
		<p class="microcopy">Stage-by-stage hormone requirements from the PDF benchmark.</p>
		<div class="data-table-wrapper">
			<table class="data-table">
				<thead>
					<tr>
						<th>Stage</th>
						<th>Hormone</th>
						<th>Medium</th>
						<th>Duration</th>
					</tr>
				</thead>
				<tbody>
					{#each hormoneMatrix as row}
						<tr>
							<td><strong>{row.stage}</strong></td>
							<td>{row.hormone}</td>
							<td>{row.medium}</td>
							<td>{row.duration}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</ContentBlock>

	<ContentBlock title="Explant Source">
		<p>Use microshoots in proliferation from established cultures as explant source.</p>
	</ContentBlock>

	<ContentBlock title="Stage 1: Induction (13 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Inoculate microshoots in Petri dishes containing {convertVolume(25, $unitSystem)} culture medium.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Agar" /> Sigma® {convertWeight(7, $unitSystem)}/L + <Term abbr="2,4-D" /> (5 μM) + <Term abbr="Kinetin" /> (1 μM)
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Culture conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h light (50-60 μmol/m²/s), 60% ± 5% RH
			</li>
			<li>
				<span class="step-number">Step 4</span>
				After <Timer duration={7862400} label="Induction">13 weeks</Timer>, yellow-colored nodular cluster cultures arise.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 2: Establishment & Development">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Subculture {convertWeight(0.05, $unitSystem)} nodular cluster cultures over paper filter bridges.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use test tubes (25 mm × 150 mm) containing {convertVolume(15, $unitSystem)} liquid culture medium.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium:</strong> Same as induction stage but <strong>free of <Term abbr="PGR" /></strong> (plant growth regulators).
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 3: Multiplication (9 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Subculture {convertWeight(0.5, $unitSystem)} nodular cultures in 300 mL glass flasks.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use {convertVolume(15, $unitSystem)} liquid culture medium per flask.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="2-iP" /> (12 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Clusters of microshoots develop after <Timer duration={5443200} label="Multiplication">9 weeks</Timer>.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 4: Elongation">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Subculture twice at 4-week intervals.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use 300 mL glass flasks with {convertVolume(15, $unitSystem)} liquid medium per flask.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="GA₃" /> (5 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Shoots elongate to ≥3 cm for <Term abbr="acclimatization" />.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 5: Acclimatization">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Transfer shoots ≥3 cm to trays with 128 cells (60 cm³ each).
			</li>
			<li>
				<span class="step-number">Step 2</span>
				<strong>Substrate:</strong> 1:1 (v:v) carbonized rice coat + Turfa Fértil® mineral supplement (N:4%, P₂O₅:14%, K₂O:8%)
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Keep in greenhouse with controlled mist for <Timer duration={5443200} label="Acclimatization">9 weeks</Timer>.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Success rate:</strong> High survival when shoots reach minimum 3 cm size.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>Nodule induction:</strong> 2,4-D and Kinetin combination critical for yellow nodular cluster formation</li>
			<li><strong>PGR-free establishment:</strong> Allows natural development before multiplication</li>
			<li><strong>2-iP multiplication:</strong> High concentration (12 μM) promotes microshoot cluster proliferation</li>
			<li><strong>GA₃ elongation:</strong> Ensures adequate shoot size for successful acclimatization</li>
			<li><strong>Minimum size:</strong> 3 cm shoots essential for acclimatization success</li>
			<li><strong>Conservation value:</strong> Protocol enables propagation of this threatened species</li>
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
