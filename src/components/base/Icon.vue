<template>
  <g v-if="name === 'search'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="20px"
      height="20px"
    >
      <path
        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
      />
    </svg>
  </g>

  <g v-else-if="name === 'weather'">
    <svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="20%"
   height="20%"
   viewBox="0 0 64 64"
   version="1.1"
   xml:space="preserve"
   style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2;"
   id="svg19">
  <metadata
   id="metadata25">
    <rdf:RDF>
      <cc:Work
   rdf:about="">
        <dc:format>image/svg+xml</dc:format>

        <dc:type
   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />

      </cc:Work>

    </rdf:RDF>

  </metadata>

  <defs
   id="defs23" />

  
  <path
   d="M23.634,36.002c0.979,-0.001 1.849,-0.626 2.162,-1.554c0.789,-2.452 3.097,-4.214 5.813,-4.214c2.716,0 5.024,1.762 5.842,4.204c0.309,0.916 1.167,1.532 2.133,1.532c0.964,0.032 1.949,0.032 1.949,0.032c1.724,0 3.378,0.685 4.596,1.904c1.219,1.218 1.904,2.872 1.904,4.596c0,0.001 0,0.002 0,0.003c0,1.723 -0.685,3.377 -1.904,4.596c-1.218,1.219 -2.872,1.903 -4.596,1.903c-5.75,0 -14.098,0 -19.849,0c-1.723,0 -3.377,-0.684 -4.596,-1.903c-1.219,-1.219 -1.903,-2.873 -1.903,-4.596c0,-0.001 0,-0.002 0,-0.003c0,-1.724 0.684,-3.378 1.903,-4.596c1.219,-1.219 2.873,-1.904 4.596,-1.904l1.95,0Z"
   style="fill:none;stroke:#222a33;stroke-width:1.5px;"
   id="path3" />

  <path
   d="M11.864,44.68c-0.97,-0.313 -1.862,-0.854 -2.597,-1.588c-1.219,-1.219 -1.903,-2.872 -1.903,-4.596c0,-0.001 0,-0.002 0,-0.003c0,-1.724 0.684,-3.377 1.903,-4.596c1.219,-1.219 2.873,-1.904 4.596,-1.904l3.778,0c0.202,-3.217 2.879,-5.768 6.147,-5.768c2.76,0 5.099,1.82 5.88,4.324"
   style="fill:none;stroke:#222a33;stroke-width:1.5px;"
   id="path5" />

  <path
   d="M37.232,26.996c0.882,-0.491 1.898,-0.771 2.98,-0.771c2.716,0 5.024,1.762 5.842,4.205c0.309,0.915 1.167,1.531 2.133,1.531c0.964,0.032 1.95,0.032 1.95,0.032c1.723,0 3.377,0.685 4.596,1.904c1.219,1.219 1.903,2.872 1.903,4.596c0,0.001 0,0.002 0,0.003c0,1.724 -0.684,3.377 -1.903,4.596c-1.219,1.219 -2.873,1.904 -4.596,1.904l-2.6,0"
   style="fill:none;stroke:#222a33;stroke-width:1.5px;"
   id="path7" />

  <path
   d="M38.864,25.996c0,-3.312 2.688,-6 6,-6c3.311,0 6,2.688 6,6c0,0.701 -0.121,1.374 -0.342,2"
   style="fill:none;stroke:#222a33;stroke-width:1.5px;"
   id="path9" />

  <path
   d="M44.864,14.996l0,2"
   style="fill:none;stroke:#222a33;stroke-width:1.5px;"
   id="path11" />

  <path
   d="M52.642,18.217l-1.414,1.415"
   style="fill:none;stroke:#222a33;stroke-width:1.5px;"
   id="path13" />

  <path
   d="M55.864,25.996l-2,0"
   style="fill:none;stroke:#222a33;stroke-width:1.5px;"
   id="path15" />

  <path
   d="M37.085,18.217l1.415,1.415"
   style="fill:none;stroke:#222a33;stroke-width:1.5px;"
   id="path17" />

</svg>
  </g>
</template>

<script setup>
import { defineProps } from "vue";
import { string } from "vue-types";

defineProps({
  name: string(),
});
</script>
