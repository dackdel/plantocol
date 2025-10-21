<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';
	
	const title = 'Monstera deliciosa<br>Swiss Cheese Plant';
	const badges = [
		'Difficulty: Easy',
		'Success Rate: 80-85%',
		'Explant: Node'
	];
	const introColumns = [
		'Monstera deliciosa is highly responsive to tissue culture techniques. The species demonstrates excellent regeneration capabilities from nodal explants with minimal hormone requirements.',
		'This protocol has been optimized for node culture, which provides the most reliable results. The extended sterilization process ensures contamination-free cultures while maintaining tissue viability.',
		'Success depends primarily on proper sterilization technique. The multi-step bleach and hydrogen peroxide treatment eliminates surface contaminants without damaging meristematic tissue.'
	];
	const source = '';
</script>

<svelte:head>
	<title>Monstera deliciosa Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Sterilization Protocol">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Clean explants under running tap water. Use soft brush to thoroughly clean any roots or debris. Duration: until visibly clean.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Soak explants in dish soap solution with magnetic stirring. Duration: <Timer duration={3600} label="Dish Soap Soak">1 hour</Timer>.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Prepare 1% bleach solution ({convertVolume(3, $unitSystem)} bleach to {convertVolume(300, $unitSystem)} distilled water) with surfactant and Tween 20.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Sterilize explants in bleach solution without disturbing. Duration: <Timer duration={3600} label="Bleach Sterilization">1 hour</Timer>.
			</li>
			<li>
				<span class="step-number">Step 5</span>
				Rinse with 3% hydrogen peroxide. Duration: <Timer duration={300} label="H₂O₂ Rinse">5 minutes</Timer>.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Final sterilization with H₂O₂ + vinegar mixture ({convertVolume(3, $unitSystem)} vinegar to {convertVolume(150, $unitSystem)} H₂O₂). Duration: <Timer duration={60} label="Final Sterilization">1 minute</Timer>. Creates powerful oxidizer.
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
					<td><strong>Stage I</strong><br>Establishment</td>
					<td>MS medium • Sucrose {convertWeight(30, $unitSystem)}/L • Agar {convertWeight(7, $unitSystem)}/L • {displayPH(5.7)}<br><em>Autoclave: {convertTemp(121, $unitSystem)}, 15 PSI, 15 minutes</em></td>
				</tr>
				<tr>
					<td><strong>Stage II</strong><br>Multiplication</td>
					<td>MS medium • Sucrose {convertWeight(30, $unitSystem)}/L • Agar {convertWeight(7, $unitSystem)}/L • {displayPH(5.7)}<br><em>Monitor for media depletion after 2 weeks</em></td>
				</tr>
				<tr>
					<td><strong>Stage III</strong><br>Rooting</td>
					<td>MS medium • Sucrose {convertWeight(30, $unitSystem)}/L • Agar {convertWeight(7, $unitSystem)}/L • {displayPH(5.7)}</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>
	
	<ContentBlock title="Culture Conditions & Transfer" columns={2}>
		<div>
			<p><strong>Temperature:</strong> Room temperature ({convertTemp(20, $unitSystem)}-{convertTemp(25, $unitSystem)})</p>
			<p><strong>Light:</strong> Standard tissue culture lighting, 16-hour photoperiod</p>
			<p><strong>Subculture:</strong> Every 2 weeks if media shows signs of depletion</p>
			<p><strong>Humidity:</strong> 60-70% relative humidity</p>
		</div>
		<div>
			<p><strong>Acclimatization Process:</strong></p>
			<ol>
				<li>Transfer rooted plantlets to small pot with sterile soil mix</li>
				<li>Gradually acclimate to ambient conditions over 2-3 weeks</li>
				<li>Reduce humidity incrementally during transition period</li>
				<li>Transfer to larger pot once well-established</li>
			</ol>
		</div>
	</ContentBlock>
</ProtocolLayout>
