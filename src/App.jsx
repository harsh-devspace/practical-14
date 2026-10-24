import React, { useState } from 'react'
import { UserCheck, Sparkles, CheckCircle2, RotateCcw, Award, GraduationCap, Mail, Phone, Calendar, BookOpen, Code2 } from 'lucide-react'

export default function App() {
  const initialForm = {
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: 'Male',
    course: 'Computer Science & Engineering',
    skills: ['React', 'JavaScript'],
    bio: '',
    agreedToTerms: false
  }

  const [formData, setFormData] = useState(initialForm)
  const [submittedData, setSubmittedData] = useState(null)
  const [submissionCount, setSubmissionCount] = useState(0)

  const availableSkills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS']

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSkillToggle = (skill) => {
    setFormData((prev) => {
      const exists = prev.skills.includes(skill)
      return {
        ...prev,
        skills: exists ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill]
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email) return
    setSubmittedData({ ...formData, registrationId: `REG-${Math.floor(100000 + Math.random() * 900000)}`, timestamp: new Date().toLocaleTimeString() })
    setSubmissionCount((c) => c + 1)
  }

  const handleReset = () => {
    setFormData(initialForm)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-white tracking-tight">Student<span className="text-cyan-400">Portal</span></span>
              <span className="block text-[11px] text-slate-400">Practical 14 • Controlled Components</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>React useState() Two-Way Binding</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 space-y-8">
        {/* Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800/60 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Controlled Form Paradigm
            </div>
            <h2 className="text-2xl font-bold text-white">Student Registration Form</h2>
            <p className="text-sm text-slate-400">Form element values are governed exclusively by React component state via value & onChange.</p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-mono">
            Submissions: <span className="text-cyan-400 font-bold">{submissionCount}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-slate-900/80 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <GraduationCap className="w-5 h-5 text-cyan-400" /> Enter Student Information
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Full Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Harshita Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="student@university.edu"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm"
                  />
                </div>
              </div>

              {/* DOB & Course */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Department / Major</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm"
                  >
                    <option>Computer Science & Engineering</option>
                    <option>Information Technology</option>
                    <option>Electronics & Communication</option>
                    <option>Data Science & AI</option>
                    <option>Mechanical Engineering</option>
                  </select>
                </div>
              </div>

              {/* Gender Radio */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Gender</label>
                <div className="flex gap-4">
                  {['Male', 'Female', 'Other'].map((g) => (
                    <label key={g} className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={formData.gender === g}
                        onChange={handleInputChange}
                        className="text-cyan-500 focus:ring-cyan-500"
                      />
                      <span>{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Skills Checkboxes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Technical Skills</label>
                <div className="flex flex-wrap gap-2">
                  {availableSkills.map((skill) => {
                    const isChecked = formData.skills.includes(skill)
                    return (
                      <button
                        type="button"
                        key={skill}
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          isChecked
                            ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                            : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {isChecked ? '✓ ' : '+ '} {skill}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Bio Textarea */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Statement of Purpose / Bio</label>
                  <span className="text-[11px] text-slate-500">{formData.bio.length} characters</span>
                </div>
                <textarea
                  name="bio"
                  rows={3}
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about your academic aspirations and coding projects..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm"
                />
              </div>

              {/* Terms Checkbox */}
              <div>
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    className="rounded text-cyan-500 focus:ring-cyan-500"
                  />
                  <span>I certify that all supplied registration information is accurate.</span>
                </label>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25"
                >
                  Submit Registration
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" /> Reset
                </button>
              </div>
            </form>
          </div>

          {/* Result / Preview Column */}
          <div className="lg:col-span-5 space-y-6">
            {submittedData ? (
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-emerald-500/40 shadow-2xl space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-5 h-5" /> Registration Successful
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{submittedData.timestamp}</span>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-1">
                  <span className="text-[11px] text-emerald-300 uppercase font-semibold">Allocated Registration ID</span>
                  <div className="text-xl font-mono font-extrabold text-emerald-400">{submittedData.registrationId}</div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Student Name</span>
                    <span className="font-semibold text-white">{submittedData.fullName}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Email</span>
                    <span className="font-semibold text-cyan-400">{submittedData.email}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Phone</span>
                    <span className="font-semibold text-white">{submittedData.phone || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Department</span>
                    <span className="font-semibold text-white">{submittedData.course}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Gender</span>
                    <span className="font-semibold text-white">{submittedData.gender}</span>
                  </div>
                  <div className="py-1.5 border-b border-slate-800 space-y-1">
                    <span className="text-slate-400 block">Technical Skills</span>
                    <div className="flex flex-wrap gap-1">
                      {submittedData.skills.length > 0 ? (
                        submittedData.skills.map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">{s}</span>
                        ))
                      ) : (
                        <span className="text-slate-500">None selected</span>
                      )}
                    </div>
                  </div>
                  {submittedData.bio && (
                    <div className="py-1.5 space-y-1">
                      <span className="text-slate-400 block">Bio Statement</span>
                      <p className="text-slate-300 italic bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 text-[11px]">{submittedData.bio}</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Live Form State Inspector</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fill out the form on the left. The submitted credentials and student card will render here upon submission.
                </p>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-left text-[11px] text-slate-400 space-y-1 overflow-x-auto">
                  <div className="text-slate-500">// Real-time state preview:</div>
                  <div>name: <span className="text-cyan-400">"{formData.fullName}"</span></div>
                  <div>email: <span className="text-cyan-400">"{formData.email}"</span></div>
                  <div>skills: <span className="text-amber-400">[{formData.skills.map((s) => `"${s}"`).join(', ')}]</span></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-900/60 py-6 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>React Practical 14 • Controlled Components with useState()</span>
          <span>Single Source of Truth Pattern in React</span>
        </div>
      </footer>
    </div>
  )
}
