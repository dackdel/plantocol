<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Alcantarea imperialis<br>Imperial Bromeliad';
	const badges = [
		'Giant Species (up to 2m)',
		'TDZ Protocol',
		'Survival: 98%'
	];
	const introColumns = [
		'The imperial bromeliad (Alcantarea imperialis, syn. Vriesea imperialis) is one of the largest bromeliads in the world, occurring naturally in rocky southeastern regions of the Mata Atlântica (Atlantic Forest).',
		'This impressive, magnificent giant bromeliad reaches 90-120 cm high in full sun but can grow up to 2 m. The spineless leaves with dark green superior side and purple inferior side form a massive rosette from which emerges the flower stalk.',
		'The huge inflorescence blooms from mid-summer to early fall bearing white flowers protected by large bracts ranging from purple to dark green. In cultivation, flowering occurs in 5-7 years versus 50 years in nature.'
	];
	const source = 'Guerra & Dal Vesco (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Alcantarea imperialis Protocol - Plantocol</title>
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
				<strong>Culture conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h <Term abbr="photoperiod" /> (50-60 μmol/m²/s), 60% ± 5% RH
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={6048000} label="Initial Induction">10 weeks</Timer>, nodule cluster cultures arise from explants.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Subculture 3 times at 6-week intervals in the same medium.
			</li>
			<li>
				<span class="step-number">Step 7</span>
				<strong>Total induction:</strong> 10 weeks + (3 × 6 weeks) = 28 weeks
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 2: Multiplication with Thidiazuron">
		<div class="highlight-box">
			<strong>Why This Species Matters</strong>
			<p>Alcantarea imperialis is one of the most cultivated bromeliads in gardens worldwide. Tissue culture enables rapid propagation of this slow-growing giant, reducing the time to flowering from 50 years (wild) to 5-7 years (cultivation).</p>
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
			<li>
				<span class="step-number">Step 5</span>
				<strong>Cost advantage:</strong> TDZ at 0.1 μM is significantly more economical than traditional BAP/NAA combinations
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
				Culture for <Timer duration={6048000} label="Elongation">10 weeks</Timer> until shoots reach ≥3.0 cm length.
			</li>
			<li>
				<span class="step-number">Step 5</span>
				<strong>Note:</strong> No exogenous <Term abbr="GA₃" /> required - natural elongation in PGR-free medium is sufficient
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
				Place trays in nebulization tunnel or greenhouse with controlled mist system.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Provide 50% shade using shade cloth to prevent light stress.
			</li>
			<li>
				<span class="step-number">Step 5</span>
				Weekly application of ¼ <Term abbr="MS" /> salts solution as foliar spray.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				<strong>Duration:</strong> <Timer duration={5443200} label="Acclimatization">9 weeks</Timer> in mist environment
			</li>
			<li>
				<span class="step-number">Step 7</span>
				<strong>Survival rate:</strong> 98% (highest among tested bromeliads)
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Complete Protocol Timeline">
		<table>
			<thead>
				<tr>
					<th>Stage</th>
					<th>Duration</th>
					<th>Medium/Conditions</th>
					<th>Outcome</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Stage 1: Induction</strong></td>
					<td>28 weeks</td>
					<td>MS + NAA (2 μM) + BAP (4 μM)<br>Liquid, filter bridges</td>
					<td>Nodule cluster cultures</td>
				</tr>
				<tr>
					<td><strong>Stage 2: Multiplication</strong></td>
					<td>Variable cycles</td>
					<td>MS + TDZ (0.1 μM)<br>300 mL flasks</td>
					<td>6:1 multiplication rate</td>
				</tr>
				<tr>
					<td><strong>Stage 3: Elongation</strong></td>
					<td>10 weeks</td>
					<td>MS, PGR-free<br>Liquid medium</td>
					<td>Shoots ≥3.0 cm</td>
				</tr>
				<tr>
					<td><strong>Stage 4: Acclimatization</strong></td>
					<td>9 weeks</td>
					<td>2:1:1 substrate mix<br>Controlled mist, 50% shade</td>
					<td>98% survival</td>
				</tr>
				<tr>
					<td><strong>Total Time</strong></td>
					<td><strong>~47+ weeks</strong></td>
					<td colspan="2">Plus multiplication cycles as needed</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Special Considerations for Giant Species">
		<ul>
			<li><strong>Extended induction period:</strong> Larger species require longer stabilization (28 weeks vs 8-10 for smaller species)</li>
			<li><strong>Container size:</strong> May need larger flasks as plants develop if prolonged in vitro culture needed</li>
			<li><strong>Substrate quality:</strong> Excellent drainage essential for this lithophytic (rock-dwelling) species</li>
			<li><strong>Acclimatization space:</strong> Plan for eventual large rosette size (90-120 cm diameter)</li>
			<li><strong>Slow growth:</strong> Even with tissue culture, expect 5-7 years to flowering</li>
			<li><strong>High value:</strong> 98% survival rate justifies investment in quality substrate and controlled environment</li>
		</ul>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>Patient induction:</strong> Full 28-week induction ensures stable nodule cluster formation</li>
			<li><strong>TDZ precision:</strong> Exactly 0.1 μM - do not increase concentration</li>
			<li><strong>Natural elongation:</strong> PGR-free medium allows natural, sturdy shoot development</li>
			<li><strong>Size threshold:</strong> Strictly enforce 3.0 cm minimum for acclimatization</li>
			<li><strong>Substrate drainage:</strong> Rocky origin requires excellent drainage - three-component mix ideal</li>
			<li><strong>Gradual transition:</strong> Controlled mist critical for maintaining high 98% survival</li>
			<li><strong>Conservation value:</strong> Enables propagation of this magnificent species without wild collection</li>
		</ul>
	</ContentBlock>
</ProtocolLayout>

<style>
	.highlight-box {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 1.25rem;
		border-radius: 8px;
		margin: 1rem 0;
	}
	
	.highlight-box strong {
		display: block;
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
	}
	
	.highlight-box p {
		margin: 0;
		line-height: 1.6;
		opacity: 0.95;
	}
</style>
