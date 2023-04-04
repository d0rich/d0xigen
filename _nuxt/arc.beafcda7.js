import{w as ln,c as L}from"./path.53f90ab3.js";import{bK as rn,bL as U,bM as w,bN as an,bO as y,bI as on,bP as z,bQ as _,bR as un,bS as t,bT as sn,bU as tn,bV as fn}from"./entry.17c5dee4.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,S,I,v,R,M,r){var q=S-l,i=I-h,n=M-v,m=r-R,a=m*q-n*i;if(!(a*a<y))return a=(n*(h-R)-m*(l-v))/a,[l+a*q,h+a*i]}function J(l,h,S,I,v,R,M){var r=l-S,q=h-I,i=(M?R:-R)/z(r*r+q*q),n=i*q,m=-i*r,a=l+n,s=h+m,f=S+n,c=I+m,N=(a+f)/2,o=(s+c)/2,p=f-a,g=c-s,A=p*p+g*g,b=v-R,T=a*c-f*s,D=(g<0?-1:1)*z(fn(0,b*b*A-T*T)),E=(T*g-p*D)/A,K=(-T*p-g*D)/A,P=(T*g+p*D)/A,d=(-T*p+g*D)/A,x=E-N,e=K-o,u=P-N,Q=d-o;return x*x+e*e>u*u+Q*Q&&(E=P,K=d),{cx:E,cy:K,x01:-n,y01:-m,x11:E*(v/b-1),y11:K*(v/b-1)}}function vn(){var l=cn,h=yn,S=L(0),I=null,v=gn,R=mn,M=pn,r=null,q=ln(i);function i(){var n,m,a=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-an,c=R.apply(this,arguments)-an,N=un(c-f),o=c>f;if(r||(r=n=q()),s<a&&(m=s,s=a,a=m),!(s>y))r.moveTo(0,0);else if(N>on-y)r.moveTo(s*U(f),s*w(f)),r.arc(0,0,s,f,c,!o),a>y&&(r.moveTo(a*U(c),a*w(c)),r.arc(0,0,a,c,f,o));else{var p=f,g=c,A=f,b=c,T=N,D=N,E=M.apply(this,arguments)/2,K=E>y&&(I?+I.apply(this,arguments):z(a*a+s*s)),P=_(un(s-a)/2,+S.apply(this,arguments)),d=P,x=P,e,u;if(K>y){var Q=sn(K/a*w(E)),B=sn(K/s*w(E));(T-=Q*2)>y?(Q*=o?1:-1,A+=Q,b-=Q):(T=0,A=b=(f+c)/2),(D-=B*2)>y?(B*=o?1:-1,p+=B,g-=B):(D=0,p=g=(f+c)/2)}var V=s*U(p),j=s*w(p),C=a*U(b),F=a*w(b);if(P>y){var G=s*U(g),H=s*w(g),W=a*U(A),X=a*w(A),O;if(N<rn)if(O=dn(V,j,W,X,G,H,C,F)){var Y=V-O[0],Z=j-O[1],$=G-O[0],k=H-O[1],nn=1/w(tn((Y*$+Z*k)/(z(Y*Y+Z*Z)*z($*$+k*k)))/2),en=z(O[0]*O[0]+O[1]*O[1]);d=_(P,(a-en)/(nn-1)),x=_(P,(s-en)/(nn+1))}else d=x=0}D>y?x>y?(e=J(W,X,V,j,s,x,o),u=J(G,H,C,F,s,x,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),x<P?r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),r.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(r.moveTo(V,j),r.arc(0,0,s,p,g,!o)):r.moveTo(V,j),!(a>y)||!(T>y)?r.lineTo(C,F):d>y?(e=J(C,F,G,H,a,-d,o),u=J(V,j,W,X,a,-d,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),d<P?r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,a,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),r.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):r.arc(0,0,a,b,A,o)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-rn/2;return[U(m)*n,w(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:L(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:L(+n),i):h},i.cornerRadius=function(n){return arguments.length?(S=typeof n=="function"?n:L(+n),i):S},i.padRadius=function(n){return arguments.length?(I=n==null?null:typeof n=="function"?n:L(+n),i):I},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:L(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:L(+n),i):R},i.padAngle=function(n){return arguments.length?(M=typeof n=="function"?n:L(+n),i):M},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{vn as a};
