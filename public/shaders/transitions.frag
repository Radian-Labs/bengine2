precision mediump float;

uniform float u_time;
uniform float u_range;
uniform float u_timeout;
uniform float u_threshold;

uniform sampler2D u_noise;
uniform sampler2D u_foreground;
uniform sampler2D u_background;

uniform bool u_basicX;
uniform bool u_basicY;
uniform bool u_advX;
uniform bool u_advY;
uniform bool u_transition;


varying vec2 vTexCoord;

vec4 transition( vec2 pos, sampler2D bg, sampler2D fg, float timeout ) {

  vec4 color1 = texture2D( bg, pos );
  vec4 color2 = texture2D( fg, pos );
  vec4 noise = texture2D( u_noise, ( pos ) );

  float t = smoothstep(
    ( u_threshold - u_range  ) / ( ( u_time - timeout )  /  1300.0 ),
    ( u_threshold + u_range  ) / ( ( u_time - timeout )  / 1300.0 ),
    noise.r
  );

  vec4 res = mix( color1, color2, t  );
  return res;
}

void main () {
  vec2 pos = vTexCoord;

//  if ( u_basicX == true ) {
    pos.x = pos.x + (cos(pos.x * 10. ) / 100. ) * (sin(u_time / 1000. ));
  // }

  // if ( u_basicY == true ) {
    pos.y = pos.y + (sin(pos.y * 25.) / 100. ) * (cos(u_time / 1000. ));
  // }

  float numer = -10.0 + ( u_time / 1000.0 );

  // if ( u_advX == true ) {
    pos.x += ( sin( pos.x * numer ) / ( 22.0 + numer ));
  // }

  // if ( u_advY == true ) {
    pos.y += ( cos( pos.y * numer ) / ( 25.0 + numer ));
  // }

  
  vec4 col = transition( pos, u_background, u_foreground, u_timeout );


  gl_FragColor = vec4( col );
}
