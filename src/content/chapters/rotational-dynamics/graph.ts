import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Rotational Dynamics prerequisite graph (Balbharati Physics Std XII, Ch.1): circular motion and its uses,
 * then moment of inertia, torque and angular momentum, and rolling.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/rotational-dynamics-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Circular motion
  {
    id: "C01", slug: "angular-kinematics", title: "Angular velocity and acceleration", group: "Circular motion", tier: "core", visual: true,
    oneLiner: t`$\omega = 2\pi n$, $v = r\omega$ and $a_T = r\alpha$; with constant $\alpha$, angles obey the equations of motion`,
    prereqs: [], ext: ["kinematical equations of motion (Std XI Physics)", "uniform circular motion (Std XI Physics)"],
    sources: [S("Kinematics and Dynamics of Circular Motion")],
  },
  {
    id: "C02", slug: "centripetal-force", title: "Centripetal and centrifugal force", group: "Circular motion", tier: "core", visual: true,
    oneLiner: t`Circular motion needs a net inward force $\dfrac{mv^2}{r} = mr\omega^2$; in the rotating frame it appears as an outward centrifugal force`,
    prereqs: ["C01"], ext: ["real and pseudo forces (Std XI Physics)", "friction (Std XI Physics)"],
    sources: [S("Kinematics and Dynamics of Circular Motion"), S("Applications of Uniform Circular Motion")],
  },
  {
    id: "C03", slug: "flat-curved-road", title: "Vehicle on a flat curved road", group: "Circular motion", tier: "core", visual: true,
    oneLiner: t`Friction alone turns the vehicle, so $v_{max} = \sqrt{\mu r g}$; a two-wheeler rider leans at $\tan\theta = \dfrac{v^2}{rg}$`,
    prereqs: ["C02"], ext: [], sources: [S("Applications of Uniform Circular Motion")],
  },
  {
    id: "C04", slug: "banked-road", title: "Banking of roads", group: "Circular motion", tier: "core", visual: true,
    oneLiner: t`On a road banked at $\theta$, the most safe speed is $\sqrt{rg\tan\theta}$; friction widens the safe range`,
    prereqs: ["C03"], ext: [], sources: [S("Applications of Uniform Circular Motion")],
  },
  {
    id: "C05", slug: "conical-pendulum", title: "Conical pendulum and well of death", group: "Circular motion", tier: "core", visual: true,
    oneLiner: t`A conical pendulum's period is $2\pi\sqrt{\dfrac{L\cos\theta}{g}}$; a rider on a vertical wall needs $v_{min} = \sqrt{\dfrac{rg}{\mu}}$`,
    prereqs: ["C02"], ext: [], sources: [S("Applications of Uniform Circular Motion")],
  },
  {
    id: "C06", slug: "vertical-circle", title: "Vertical circular motion", group: "Circular motion", tier: "core", visual: true,
    oneLiner: t`Under gravity the least speeds are $\sqrt{rg}$ at the top, $\sqrt{3rg}$ midway and $\sqrt{5rg}$ at the bottom`,
    prereqs: ["C02"], ext: ["conservation of mechanical energy (Std XI Physics)"], sources: [S("Vertical Circular Motion")],
  },

  // Moment of inertia
  {
    id: "C07", slug: "moment-of-inertia", title: "Moment of inertia and radius of gyration", group: "Moment of inertia", tier: "core",
    oneLiner: t`$I = \sum m r^2$ measures how mass is spread about the axis; $I = MK^2$ defines the radius of gyration $K$`,
    prereqs: [], ext: ["centre of mass (Std XI Physics)"], sources: [S("Moment of Inertia and Radius of Gyration")],
  },
  {
    id: "C08", slug: "rotational-kinetic-energy", title: "Rotational kinetic energy", group: "Moment of inertia", tier: "core",
    oneLiner: t`A body turning at $\omega$ has kinetic energy $\dfrac{1}{2}I\omega^2$, the rotational partner of $\dfrac{1}{2}mv^2$`,
    prereqs: ["C01", "C07"], ext: ["work–energy theorem (Std XI Physics)"], sources: [S("Moment of Inertia and Radius of Gyration")],
  },
  {
    id: "C09", slug: "parallel-perpendicular-axes", title: "Parallel and perpendicular axes", group: "Moment of inertia", tier: "core", visual: true,
    oneLiner: t`$I_o = I_c + Mh^2$ for any parallel axis; for a flat body, $I_z = I_x + I_y$`,
    prereqs: ["C07"], ext: [], sources: [S("Theorems of Parallel and Perpendicular Axes")],
  },

  // Torque and angular momentum
  {
    id: "C10", slug: "torque-angular-momentum", title: "Torque and angular momentum", group: "Torque and angular momentum", tier: "core",
    oneLiner: t`For a rigid body $L = I\omega$ and $\tau = I\alpha$; the power delivered is $P = \tau\omega$`,
    prereqs: ["C01", "C07"], ext: ["vector product (Std XI Physics)", "Newton's second law (Std XI Physics)"],
    sources: [S("Angular Momentum and Torque")],
  },
  {
    id: "C11", slug: "conservation-angular-momentum", title: "Conservation of angular momentum", group: "Torque and angular momentum", tier: "core",
    oneLiner: t`With no external torque, $I_1\omega_1 = I_2\omega_2$: a body that pulls its mass in spins faster`,
    prereqs: ["C10"], ext: [], sources: [S("Conservation of Angular Momentum")],
  },

  // Rolling
  {
    id: "C12", slug: "rolling-motion", title: "Rolling motion", group: "Rolling", tier: "core", visual: true,
    oneLiner: t`A body rolling without slipping has $E = \dfrac{1}{2}mv^2\left(1 + \dfrac{K^2}{R^2}\right)$ and rolls down a slope with $a = \dfrac{g\sin\theta}{1 + K^2/R^2}$`,
    prereqs: ["C08"], ext: [], sources: [S("Rolling Motion")],
  },
];
