import babel from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: 'components/Modal.jsx',
    output: {
      file: 'Modal.js',
      format: 'cjs'
    },
    external: ["react", "styled-components", "prop-types"],
    plugins: [
      babel({
        exclude: "node_module/**",
          presets: ['@babel/preset-react'],
          babelHelpers: 'bundled',
      }),
      commonjs(),
      terser(),
    ]
};
