<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Vriesea friburgensis<br>var. paludosa';
	const badges = [
		'Atlantic Forest Native',
		'Threatened Species',
		'Nodule Cluster Culture'
	];
	const introColumns = [
		'Vriesea friburgensis var. paludosa is found in epiphytic or terrestrial habitats in southern and southeastern Brazilian Atlantic Forest. They grow preferentially as terrestrials in sandy, dry seacoast soils with sand dune vegetation.',
		'This species forms dense groups and is typically helophytic but capable of surviving under diffuse light with few air humidity requirements. In its natural habitat, this bromeliad is threatened by extinction.',
		'The protocol uses nodule cluster regeneration with 2,4-D/Kin induction followed by 2-iP multiplication, providing an efficient system for conservation and mass propagation.'
	];
	const source = 'Guerra & Dal Vesco (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Vriesea friburgensis Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
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
			<li><strong>2-iP multiplication:</strong> Promotes microshoot cluster proliferation</li>
			<li><strong>GA₃ elongation:</strong> Ensures adequate shoot size for successful acclimatization</li>
			<li><strong>Minimum size:</strong> 3 cm shoots essential for acclimatization success</li>
		</ul>
	</ContentBlock>
</ProtocolLayout>
