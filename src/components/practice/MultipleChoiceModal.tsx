@@ .. @@
 const MultipleChoiceModal: React.FC<MultipleChoiceModalProps> = ({ onClose }) => {
   return (
-    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
+    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 perspective-1000">
       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
       
       <div className="relative w-full max-w-4xl backdrop-blur-xl bg-white/5 rounded-2xl p-8
                    border border-white/10 space-y-6 animate-fade-in
-                   shadow-[0_8px_32px_rgba(34,197,94,0.3)]">
+                   shadow-[0_8px_32px_rgba(34,197,94,0.3)]
+                   transform-style-preserve-3d rotate-x-12
+                   animate-[modal-pop_0.4s_ease-out_forwards]">
         {/* Close button */}
         <button
           onClick={onClose}