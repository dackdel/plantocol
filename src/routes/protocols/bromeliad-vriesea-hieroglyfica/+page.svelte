<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Vriesea hieroglyphica<br>Hieroglyphic Bromeliad';
	const badges = [
		'TDZ Protocol',
		'Survival: 95%',
		'Rate: 6:1'
	];
	const introColumns = [
		'Vriesea hieroglyphica is a bromeliad native to southern Brazil. Its ornamental importance relies mainly on extremely handsome foliage with glossy, bright green leaves featuring wide and irregular horizontal bands of dark green.',
		'The leaves are 90 cm long and 7.5 cm wide, forming an impressive rosette. The inflorescence with long green bracts and yellow flowers is modest compared to the spectacular foliage.',
		'This protocol uses Thidiazuron (TDZ) for multiplication, which is significantly more cost-effective than traditional BAP/NAA combinations while providing reliable regeneration rates.'
	];
	const source = 'Guerra & Dal Vesco (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Vriesea hieroglyphica Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Stage 1: Induction (28 weeks total)">
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
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h light (50-60 μmol/m²/s), 60% ± 5% RH
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={6048000} label="Initial Induction">10 weeks</Timer>, nodule cluster cultures arise from explants.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Subculture 3 times, every 6 weeks, in the same medium.
			</li>
			<li>
				<span class="step-number">Step 7</span>
				Total induction period: 10 weeks + (3 × 6 weeks) = 28 weeks
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 2: Multiplication with Thidiazuron">
		<div class="info-box">
			<strong>TDZ Cost Advantage</strong>
			<p>At only 0.1 μM concentration, TDZ provides effective multiplication at a fraction of the cost of traditional cytokinin/auxin combinations. This makes large-scale production economically viable.</p>
		</div>
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
				<strong>Medium:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Thidiazuron" /> (TDZ) (0.1 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Multiplication rate:</strong> 6:1 per cycle
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 3: Elongation (10 weeks)">
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
				<strong>Medium:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L, <strong>free of <Term abbr="PGR" /></strong>
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Culture for <Timer duration={6048000} label="Elongation">10 weeks</Timer> until shoots reach ≥3.0 cm.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 4: Acclimatization (9 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Transfer shoots ≥3.0 cm to trays of 128 cells (60 cm³ each).
			</li>
			<li>
				<span class="step-number">Step 2</span>
				<strong>Substrate composition:</strong> 2:1:1 (v:v:v) Plantmax® HA : pine bark : carbonized rice coat
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Place trays in greenhouse with controlled mist.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Provide 50% shade using shade cloth or greenhouse screening.
			</li>
			<li>
				<span class="step-number">Step 5</span>
				Weekly spray with ¼ <Term abbr="MS" /> salts solution for nutrition.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				<strong>Duration:</strong> <Timer duration={5443200} label="Acclimatization">9 weeks</Timer>
			</li>
			<li>
				<span class="step-number">Step 7</span>
				<strong>Survival rate:</strong> 95%
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Protocol Timeline Summary">
		<table>
			<thead>
				<tr>
					<th>Stage</th>
					<th>Duration</th>
					<th>Medium/Substrate</th>
					<th>Key Points</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Induction</strong></td>
					<td>28 weeks</td>
					<td>MS + NAA (2 μM) + BAP (4 μM)</td>
					<td>Initial 10 weeks + 3 subcultures</td>
				</tr>
				<tr>
					<td><strong>Multiplication</strong></td>
					<td>Variable</td>
					<td>MS + TDZ (0.1 μM)</td>
					<td>6:1 multiplication rate</td>
				</tr>
				<tr>
					<td><strong>Elongation</strong></td>
					<td>10 weeks</td>
					<td>MS, PGR-free</td>
					<td>Target: ≥3 cm shoots</td>
				</tr>
				<tr>
					<td><strong>Acclimatization</strong></td>
					<td>9 weeks</td>
					<td>2:1:1 Plantmax:bark:rice coat</td>
					<td>95% survival</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Culture Conditions">
		<div class="conditions-grid">
			<div>
				<h4>In Vitro Stages</h4>
				<ul>
					<li><strong>Temperature:</strong> {convertTemp(25, $unitSystem)} ± 2°C</li>
					<li><strong>Light:</strong> 50-60 μmol/m²/s</li>
					<li><strong><Term abbr="Photoperiod" />:</strong> 16 hours light</li>
					<li><strong>Humidity:</strong> 60% ± 5% RH</li>
					<li><strong>Container:</strong> Test tubes (induction), 300 mL flasks (multiplication)</li>
					<li><strong>Support:</strong> Filter paper bridges for liquid cultures</li>
				</ul>
			</div>
			<div>
				<h4>Acclimatization Stage</h4>
				<ul>
					<li><strong>Container:</strong> 128-cell trays (60 cm³/cell)</li>
					<li><strong>Environment:</strong> Greenhouse with mist</li>
					<li><strong>Shade:</strong> 50% light reduction</li>
					<li><strong>Irrigation:</strong> Controlled mist system</li>
					<li><strong>Nutrition:</strong> Weekly ¼ MS spray</li>
					<li><strong>Minimum size:</strong> 3.0 cm shoots</li>
				</ul>
			</div>
		</div>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>Extended induction:</strong> 28-week induction period ensures stable nodule cluster formation</li>
			<li><strong>TDZ concentration:</strong> Very low 0.1 μM concentration is optimal - higher concentrations may cause abnormalities</li>
			<li><strong>PGR-free elongation:</strong> Hormone-free medium prevents hyperhydricity and promotes natural shoot development</li>
			<li><strong>Shoot size critical:</strong> Minimum 3 cm essential for 95% survival rate</li>
			<li><strong>Substrate drainage:</strong> Three-component mix ensures excellent drainage for epiphytic species</li>
			<li><strong>Gradual acclimation:</strong> Controlled mist and 50% shade prevent stress during transition</li>
			<li><strong>Ornamental value:</strong> Foliage quality maintained through tissue culture process</li>
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

	.conditions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 1rem;
	}

	.conditions-grid h4 {
		color: var(--accent-color, #4a9f7c);
		margin: 0 0 0.75rem 0;
	}

	.conditions-grid ul {
		margin: 0;
		padding-left: 1.25rem;
	}

	.conditions-grid li {
		margin: 0.5rem 0;
	}
</style>
