/* SkeletonImage.svelte generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	append,
	assign,
	attr,
	create_slot,
	detach,
	element,
	exclude_internal_props,
	get_spread_update,
	init,
	insert,
	safe_not_equal,
	set_attributes,
	space,
	svg_element,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import multiplySvgPoints from "./multiply-svg-points";

function create_if_block(ctx) {
	let path;
	let path_style_value;
	let path_d_value;

	return {
		c() {
			path = svg_element("path");

			attr(path, "style", path_style_value = /*iconColor*/ ctx[3]
			? `fill: ${/*iconColor*/ ctx[3]}`
			: "");

			attr(path, "d", path_d_value = /*multiplyPoints*/ ctx[8]("M7.7148,49.5742 L48.2852,49.5742 C53.1836,49.5742 55.6446,47.1367 55.6446,42.3086 L55.6446,13.6914 C55.6446,8.8633 53.1836,6.4258 48.2852,6.4258 L7.7148,6.4258 C2.8398,6.4258 0.3554,8.8398 0.3554,13.6914 L0.3554,42.3086 C0.3554,47.1602 2.8398,49.5742 7.7148,49.5742 Z M39.2851,27.9414 C38.2304,27.0039 37.0351,26.5118 35.7695,26.5118 C34.457,26.5118 33.3085,26.9571 32.2304,27.918 L21.6366,37.3867 L17.3007,33.4492 C16.3163,32.582 15.2617,32.1133 14.1366,32.1133 C13.1054,32.1133 12.0976,32.5586 11.1366,33.4258 L4.1288,39.7305 L4.1288,13.8789 C4.1288,11.4414 5.4413,10.1992 7.7851,10.1992 L48.2147,10.1992 C50.535,10.1992 51.8708,11.4414 51.8708,13.8789 L51.8708,39.7539 L39.2851,27.9414 Z M17.8163,28.1992 C20.8398,28.1992 23.3241,25.7149 23.3241,22.668 C23.3241,19.6445 20.8398,17.1367 17.8163,17.1367 C14.7695,17.1367 12.2851,19.6445 12.2851,22.668 C12.2851,25.7149 14.7695,28.1992 17.8163,28.1992 Z"));
		},
		m(target, anchor) {
			insert(target, path, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*iconColor*/ 8 && path_style_value !== (path_style_value = /*iconColor*/ ctx[3]
			? `fill: ${/*iconColor*/ ctx[3]}`
			: "")) {
				attr(path, "style", path_style_value);
			}
		},
		d(detaching) {
			if (detaching) detach(path);
		}
	};
}

function create_fragment(ctx) {
	let span;
	let svg;
	let polygon;
	let polygon_style_value;
	let polygon_points_value;
	let svg_viewBox_value;
	let svg_style_value;
	let t;
	let current;
	let if_block = /*showIcon*/ ctx[4] && create_if_block(ctx);
	const default_slot_template = /*#slots*/ ctx[12].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);
	let span_levels = [/*rest*/ ctx[6], { class: /*skeletonClassName*/ ctx[7] }];
	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = assign(span_data, span_levels[i]);
	}

	return {
		c() {
			span = element("span");
			svg = svg_element("svg");
			polygon = svg_element("polygon");
			if (if_block) if_block.c();
			t = space();
			if (default_slot) default_slot.c();
			attr(polygon, "style", polygon_style_value = /*color*/ ctx[2] ? `fill: ${/*color*/ ctx[2]}` : "");
			attr(polygon, "fillrule", "evenodd");
			attr(polygon, "points", polygon_points_value = `0 0 ${/*width*/ ctx[0]} 0 ${/*width*/ ctx[0]} ${/*height*/ ctx[1]} 0 ${/*height*/ ctx[1]}`);
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "width", /*width*/ ctx[0]);
			attr(svg, "height", /*height*/ ctx[1]);
			attr(svg, "viewBox", svg_viewBox_value = `0 0 ${/*width*/ ctx[0]} ${/*height*/ ctx[1]}`);
			attr(svg, "preserveAspectRatio", "none");

			attr(svg, "style", svg_style_value = /*borderRadius*/ ctx[5]
			? `border-radius: ${/*borderRadius*/ ctx[5]}`
			: "");

			set_attributes(span, span_data);
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, svg);
			append(svg, polygon);
			if (if_block) if_block.m(svg, null);
			append(span, t);

			if (default_slot) {
				default_slot.m(span, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*color*/ 4 && polygon_style_value !== (polygon_style_value = /*color*/ ctx[2] ? `fill: ${/*color*/ ctx[2]}` : "")) {
				attr(polygon, "style", polygon_style_value);
			}

			if (!current || dirty & /*width, height*/ 3 && polygon_points_value !== (polygon_points_value = `0 0 ${/*width*/ ctx[0]} 0 ${/*width*/ ctx[0]} ${/*height*/ ctx[1]} 0 ${/*height*/ ctx[1]}`)) {
				attr(polygon, "points", polygon_points_value);
			}

			if (/*showIcon*/ ctx[4]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(svg, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (!current || dirty & /*width*/ 1) {
				attr(svg, "width", /*width*/ ctx[0]);
			}

			if (!current || dirty & /*height*/ 2) {
				attr(svg, "height", /*height*/ ctx[1]);
			}

			if (!current || dirty & /*width, height*/ 3 && svg_viewBox_value !== (svg_viewBox_value = `0 0 ${/*width*/ ctx[0]} ${/*height*/ ctx[1]}`)) {
				attr(svg, "viewBox", svg_viewBox_value);
			}

			if (!current || dirty & /*borderRadius*/ 32 && svg_style_value !== (svg_style_value = /*borderRadius*/ ctx[5]
			? `border-radius: ${/*borderRadius*/ ctx[5]}`
			: "")) {
				attr(svg, "style", svg_style_value);
			}

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2048) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[11], dirty, null, null);
				}
			}

			set_attributes(span, span_data = get_spread_update(span_levels, [
				dirty & /*rest*/ 64 && /*rest*/ ctx[6],
				(!current || dirty & /*skeletonClassName*/ 128) && { class: /*skeletonClassName*/ ctx[7] }
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			if (if_block) if_block.d();
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { width = 1200 } = $$props;
	let { height = 600 } = $$props;
	let { color = undefined } = $$props;
	let { iconColor = undefined } = $$props;
	let { showIcon = true } = $$props;
	let { effect = undefined } = $$props;
	let { borderRadius = undefined } = $$props;
	let { class: className = undefined } = $$props;
	let rest = {};

	function multiplyPoints(pointsString) {
		return multiplySvgPoints(pointsString, 56, width, height);
	}

	$$self.$$set = $$new_props => {
		$$invalidate(13, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("width" in $$new_props) $$invalidate(0, width = $$new_props.width);
		if ("height" in $$new_props) $$invalidate(1, height = $$new_props.height);
		if ("color" in $$new_props) $$invalidate(2, color = $$new_props.color);
		if ("iconColor" in $$new_props) $$invalidate(3, iconColor = $$new_props.iconColor);
		if ("showIcon" in $$new_props) $$invalidate(4, showIcon = $$new_props.showIcon);
		if ("effect" in $$new_props) $$invalidate(9, effect = $$new_props.effect);
		if ("borderRadius" in $$new_props) $$invalidate(5, borderRadius = $$new_props.borderRadius);
		if ("class" in $$new_props) $$invalidate(10, className = $$new_props.class);
		if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
	};

	let skeletonClassName;

	$$self.$$.update = () => {
		$: Object.keys($$props).forEach(prop => {
			if (prop !== "width" && prop !== "height" && prop !== "color" && prop !== "iconColor" && prop !== "showIcon" && prop !== "effect" && prop !== "class") {
				$$invalidate(6, rest[prop] = $$props[prop], rest);
			}
		});

		if ($$self.$$.dirty & /*effect, className*/ 1536) {
			$: $$invalidate(7, skeletonClassName = ["skeleton-image", effect && `skeleton-effect-${effect}`, className].filter(c => !!c).join(" "));
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		width,
		height,
		color,
		iconColor,
		showIcon,
		borderRadius,
		rest,
		skeletonClassName,
		multiplyPoints,
		effect,
		className,
		$$scope,
		slots
	];
}

class SkeletonImage extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			width: 0,
			height: 1,
			color: 2,
			iconColor: 3,
			showIcon: 4,
			effect: 9,
			borderRadius: 5,
			class: 10
		});
	}
}

export default SkeletonImage;