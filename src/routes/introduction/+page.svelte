<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	
	const title = 'Introduction to<br>Plant Tissue Culture';
	const introColumns = [
		'Plant tissue culture (micropropagation) is the process of growing plants from very small pieces of tissue in a sterile, controlled environment. This technique enables mass production of genetically identical plants.',
		'Benefits include disease-free plant production, year-round propagation independent of seasonal constraints, rapid multiplication of rare or endangered species, and preservation of genetic material.',
		'The process involves selection of healthy tissue, sterilization, culture initiation on specialized media, shoot development through hormone manipulation, root formation, and gradual acclimatization to ambient conditions.'
	];
</script>

<svelte:head>
	<title>Introduction to Tissue Culture - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {introColumns}>
	<ContentBlock title="The Basic Process" columns={2}>
		<div>
			<ol class="step-list">
				<li>
					<span class="step-number">Selection</span>
					Choose healthy tissue containing meristematic cells
				</li>
				<li>
					<span class="step-number">Sterilization</span>
					Eliminate surface bacteria and fungi
				</li>
				<li>
					<span class="step-number">Culture Initiation</span>
					Place explants on specialized growth media
				</li>
			</ol>
		</div>
		<div>
			<ol class="step-list" start="4">
				<li>
					<span class="step-number">Shoot Development</span>
					Encourage shoot growth with cytokinins
				</li>
				<li>
					<span class="step-number">Root Formation</span>
					Develop roots using auxin hormones
				</li>
				<li>
					<span class="step-number">Acclimatization</span>
					Gradually transfer plantlets to soil
				</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Key Terminology" columns={2}>
		<div>
			<p><strong>MS Medium:</strong> Murashige & Skoog (1962), the most commonly used basal medium containing essential nutrients, vitamins, and minerals.</p>
			<p><strong>Cytokinins (BAP, Kinetin):</strong> Plant hormones that promote shoot formation and cell division in tissue culture.</p>
			<p><strong>Explant:</strong> The plant tissue sample used to initiate culture, typically containing meristematic tissue.</p>
		</div>
		<div>
			<p><strong>Auxins (NAA, IBA, IAA):</strong> Plant hormones that promote root formation and cell elongation.</p>
			<p><strong>Callus:</strong> Undifferentiated embryonic tissue that forms from explants. Can develop into complete plants under proper hormone conditions.</p>
			<p><strong>Acclimatization:</strong> The gradual adaptation process when moving plantlets from sterile lab conditions to ambient environment.</p>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Understanding Plant Hormones" columns={2}>
		<div>
			<p><strong>Cytokinins promote shoots:</strong></p>
			<ul>
				<li>Encourage shoot formation and branching</li>
				<li>Promote cell division</li>
				<li>Higher concentrations = more shoots</li>
				<li>Common types: BAP, Kinetin, Zeatin</li>
			</ul>
			<p><strong>Auxins promote roots:</strong></p>
			<ul>
				<li>Stimulate root formation</li>
				<li>Encourage cell elongation</li>
				<li>Higher concentrations = more roots</li>
				<li>Common types: NAA, IBA, IAA</li>
			</ul>
		</div>
		<div>
			<p><strong>The hormone balance determines development:</strong></p>
			<ul>
				<li><strong>High Cytokinin : Low Auxin</strong> → Shoots develop</li>
				<li><strong>Low Cytokinin : High Auxin</strong> → Roots develop</li>
				<li><strong>Balanced levels</strong> → Callus formation</li>
			</ul>
			<p>This balance is the key to controlling what your tissue becomes. Each protocol specifies the exact hormone ratios needed for each stage.</p>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Timeline & Expectations">
		<div class="two-column">
			<div class="column-content">
				<p><strong>Typical Timeline (varies by species):</strong></p>
				<ul>
					<li><strong>Sterilization:</strong> 30 minutes - 2 hours</li>
					<li><strong>Establishment:</strong> 2-6 weeks for initial growth</li>
					<li><strong>Multiplication:</strong> 3-8 weeks per cycle</li>
					<li><strong>Rooting:</strong> 2-4 weeks for root development</li>
					<li><strong>Acclimatization:</strong> 2-4 weeks gradual transition</li>
				</ul>
				<p><strong>Total time:</strong> 2-6 months from start to finished plant. Some species are faster, others slower. Patience is essential!</p>
			</div>
			<div class="column-content">
				<p><strong>Success Factors:</strong></p>
				<ul>
					<li>Start with easy species (African violets, Begonias)</li>
					<li>Follow protocols precisely</li>
					<li>Practice sterile technique consistently</li>
					<li>Monitor cultures daily</li>
					<li>Expect some failures - it's part of learning</li>
					<li>Join online communities for support</li>
				</ul>
			</div>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Common Problems & Solutions">
		<table>
			<thead>
				<tr>
					<th>Problem</th>
					<th>Cause & Solution</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Contamination</strong><br>Bacteria or fungi growing</td>
					<td>Improve sterilization technique • Use fresh bleach solutions • Work in cleanest possible area • Check media for contamination before use</td>
				</tr>
				<tr>
					<td><strong>Browning/Necrosis</strong><br>Tissue dies and turns brown</td>
					<td>Reduce sterilization time • Add antioxidants (ascorbic acid, citric acid) • Use younger, healthier tissue • Work faster to reduce oxidation</td>
				</tr>
				<tr>
					<td><strong>No Growth</strong><br>Tissue alive but not developing</td>
					<td>Adjust hormone levels • Check media pH • Ensure fresh media • Verify correct temperature and light conditions</td>
				</tr>
				<tr>
					<td><strong>Hyperhydricity</strong><br>Glassy, waterlogged appearance</td>
					<td>Increase agar concentration • Reduce humidity in culture vessel • Improve air circulation • Lower cytokinin levels</td>
				</tr>
				<tr>
					<td><strong>Poor Acclimatization</strong><br>Plants die when moved to soil</td>
					<td>Gradual transition is critical • Maintain high humidity initially • Slowly reduce humidity over 2-4 weeks • Ensure proper rooting before transfer</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>
	
	<ContentBlock title="Frequently Asked Questions" columns={2}>
		<div>
			<p><strong>Q: Why use tissue culture instead of regular cuttings?</strong></p>
			<p>A: Mass production from minimal material, space efficient, disease-free plants, year-round propagation, and ability to propagate species that don't root from cuttings. Ideal for rare or endangered species.</p>
			
			<p><strong>Q: Are tissue cultured plants identical to the parent?</strong></p>
			<p>A: Mostly yes - they're genetic clones. However, somaclonal variation (spontaneous mutations) can occur, especially in long-term cultures or callus-based propagation. Variation rate is higher than regular cuttings but usually minimal.</p>
			
			<p><strong>Q: Can I do this at home?</strong></p>
			<p>A: Absolutely! Many hobbyists successfully practice tissue culture at home. Start with easy species, follow protocols carefully, and practice sterile technique. A small corner of a room is sufficient.</p>
		</div>
		<div>
			<p><strong>Q: Is tissue culture difficult?</strong></p>
			<p>A: It's both science and art. The science involves following protocols precisely and maintaining sterility. The art involves monitoring development, adjusting conditions, and recognizing problems early. Start simple and build experience.</p>
			
			<p><strong>Q: What can go wrong?</strong></p>
			<p>A: Contamination is the #1 challenge. Other issues include browning, no growth, and poor acclimatization. Most problems have solutions - see the troubleshooting table above.</p>
			
			<p><strong>Q: What are the real-world applications?</strong></p>
			<p>A: Commercial: ornamental plant production, crop improvement, forestry. Conservation: saving endangered species, habitat restoration. Hobbyist: propagating rare houseplants, creating new varieties, educational projects.</p>
		</div>
	</ContentBlock>
</ProtocolLayout>
