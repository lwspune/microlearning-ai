export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      academies: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      attempts: {
        Row: {
          correct: boolean
          created_at: string
          id: number
          item_id: string
          misconception_id: string | null
          option_key: string
          user_id: string
        }
        Insert: {
          correct: boolean
          created_at?: string
          id?: never
          item_id: string
          misconception_id?: string | null
          option_key: string
          user_id: string
        }
        Update: {
          correct?: boolean
          created_at?: string
          id?: never
          item_id?: string
          misconception_id?: string | null
          option_key?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "attempts_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attempts_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "published_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attempts_misconception_id_fkey"
            columns: ["misconception_id"]
            isOneToOne: false
            referencedRelation: "misconceptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attempts_option_exists"
            columns: ["item_id", "option_key"]
            isOneToOne: false
            referencedRelation: "item_options"
            referencedColumns: ["item_id", "key"]
          },
          {
            foreignKeyName: "attempts_option_exists"
            columns: ["item_id", "option_key"]
            isOneToOne: false
            referencedRelation: "published_item_options"
            referencedColumns: ["item_id", "key"]
          },
        ]
      }
      chapters: {
        Row: {
          created_at: string
          id: string
          slug: string
          title: string
        }
        Insert: {
          created_at?: string
          id?: string
          slug: string
          title: string
        }
        Update: {
          created_at?: string
          id?: string
          slug?: string
          title?: string
        }
        Relationships: []
      }
      concept_prereqs: {
        Row: {
          concept_id: string
          prereq_id: string
        }
        Insert: {
          concept_id: string
          prereq_id: string
        }
        Update: {
          concept_id?: string
          prereq_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "concept_prereqs_concept_id_fkey"
            columns: ["concept_id"]
            isOneToOne: false
            referencedRelation: "concepts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concept_prereqs_concept_id_fkey"
            columns: ["concept_id"]
            isOneToOne: false
            referencedRelation: "published_concepts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concept_prereqs_prereq_id_fkey"
            columns: ["prereq_id"]
            isOneToOne: false
            referencedRelation: "concepts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concept_prereqs_prereq_id_fkey"
            columns: ["prereq_id"]
            isOneToOne: false
            referencedRelation: "published_concepts"
            referencedColumns: ["id"]
          },
        ]
      }
      concepts: {
        Row: {
          body: Json | null
          chapter_id: string
          code: string
          ext: string[]
          grp: string
          id: string
          one_liner: string
          slug: string
          sources: string[]
          status: string
          tier: string
          title: string
        }
        Insert: {
          body?: Json | null
          chapter_id: string
          code: string
          ext?: string[]
          grp: string
          id?: string
          one_liner: string
          slug: string
          sources?: string[]
          status?: string
          tier: string
          title: string
        }
        Update: {
          body?: Json | null
          chapter_id?: string
          code?: string
          ext?: string[]
          grp?: string
          id?: string
          one_liner?: string
          slug?: string
          sources?: string[]
          status?: string
          tier?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "concepts_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
        ]
      }
      item_options: {
        Row: {
          is_correct: boolean
          item_id: string
          key: string
          misconception_id: string | null
          text: string
          value: string
        }
        Insert: {
          is_correct: boolean
          item_id: string
          key: string
          misconception_id?: string | null
          text: string
          value: string
        }
        Update: {
          is_correct?: boolean
          item_id?: string
          key?: string
          misconception_id?: string | null
          text?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "item_options_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "item_options_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "published_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "item_options_misconception_id_fkey"
            columns: ["misconception_id"]
            isOneToOne: false
            referencedRelation: "misconceptions"
            referencedColumns: ["id"]
          },
        ]
      }
      items: {
        Row: {
          code: string
          concept_id: string
          figure: Json | null
          id: string
          solution: Json
          source: Json
          stem: string
          verified: boolean
          verify: Json
        }
        Insert: {
          code: string
          concept_id: string
          figure?: Json | null
          id?: string
          solution: Json
          source: Json
          stem: string
          verified?: boolean
          verify: Json
        }
        Update: {
          code?: string
          concept_id?: string
          figure?: Json | null
          id?: string
          solution?: Json
          source?: Json
          stem?: string
          verified?: boolean
          verify?: Json
        }
        Relationships: [
          {
            foreignKeyName: "items_concept_id_fkey"
            columns: ["concept_id"]
            isOneToOne: false
            referencedRelation: "concepts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "items_concept_id_fkey"
            columns: ["concept_id"]
            isOneToOne: false
            referencedRelation: "published_concepts"
            referencedColumns: ["id"]
          },
        ]
      }
      learner_concept_state: {
        Row: {
          concept_id: string
          mastery: number
          next_review_at: string | null
          review_box: number
          review_correct: number
          state: string
          streak: number
          to_retry: number
          updated_at: string
          user_id: string
        }
        Insert: {
          concept_id: string
          mastery?: number
          next_review_at?: string | null
          review_box?: number
          review_correct?: number
          state?: string
          streak?: number
          to_retry?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          concept_id?: string
          mastery?: number
          next_review_at?: string | null
          review_box?: number
          review_correct?: number
          state?: string
          streak?: number
          to_retry?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "learner_concept_state_concept_id_fkey"
            columns: ["concept_id"]
            isOneToOne: false
            referencedRelation: "concepts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "learner_concept_state_concept_id_fkey"
            columns: ["concept_id"]
            isOneToOne: false
            referencedRelation: "published_concepts"
            referencedColumns: ["id"]
          },
        ]
      }
      misconceptions: {
        Row: {
          code: string
          concept_id: string
          fallback_concept_id: string | null
          fallback_kind: string
          fallback_topic: string | null
          id: string
          mistake: string
          remediation: string
        }
        Insert: {
          code: string
          concept_id: string
          fallback_concept_id?: string | null
          fallback_kind: string
          fallback_topic?: string | null
          id?: string
          mistake: string
          remediation: string
        }
        Update: {
          code?: string
          concept_id?: string
          fallback_concept_id?: string | null
          fallback_kind?: string
          fallback_topic?: string | null
          id?: string
          mistake?: string
          remediation?: string
        }
        Relationships: [
          {
            foreignKeyName: "misconceptions_concept_id_fkey"
            columns: ["concept_id"]
            isOneToOne: false
            referencedRelation: "concepts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "misconceptions_concept_id_fkey"
            columns: ["concept_id"]
            isOneToOne: false
            referencedRelation: "published_concepts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "misconceptions_fallback_concept_id_fkey"
            columns: ["fallback_concept_id"]
            isOneToOne: false
            referencedRelation: "concepts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "misconceptions_fallback_concept_id_fkey"
            columns: ["fallback_concept_id"]
            isOneToOne: false
            referencedRelation: "published_concepts"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          academy_id: string | null
          created_at: string
          created_by: string | null
          email: string
          full_name: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          stage: string | null
          username: string | null
        }
        Insert: {
          academy_id?: string | null
          created_at?: string
          created_by?: string | null
          email: string
          full_name: string
          id: string
          role?: Database["public"]["Enums"]["app_role"]
          stage?: string | null
          username?: string | null
        }
        Update: {
          academy_id?: string | null
          created_at?: string
          created_by?: string | null
          email?: string
          full_name?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          stage?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_academy_id_fkey"
            columns: ["academy_id"]
            isOneToOne: false
            referencedRelation: "academies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      learner_mistakes: {
        Row: {
          last_at: string | null
          misconception_id: string | null
          recent: number | null
          total: number | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attempts_misconception_id_fkey"
            columns: ["misconception_id"]
            isOneToOne: false
            referencedRelation: "misconceptions"
            referencedColumns: ["id"]
          },
        ]
      }
      learner_summary: {
        Row: {
          answered: number | null
          correct: number | null
          last_active: string | null
          learning: number | null
          mastered: number | null
          reviews_due: number | null
          user_id: string | null
        }
        Relationships: []
      }
      published_concepts: {
        Row: {
          body: Json | null
          chapter_id: string | null
          code: string | null
          ext: string[] | null
          grp: string | null
          id: string | null
          one_liner: string | null
          slug: string | null
          sources: string[] | null
          status: string | null
          tier: string | null
          title: string | null
        }
        Insert: {
          body?: Json | null
          chapter_id?: string | null
          code?: string | null
          ext?: string[] | null
          grp?: string | null
          id?: string | null
          one_liner?: string | null
          slug?: string | null
          sources?: string[] | null
          status?: string | null
          tier?: string | null
          title?: string | null
        }
        Update: {
          body?: Json | null
          chapter_id?: string | null
          code?: string | null
          ext?: string[] | null
          grp?: string | null
          id?: string | null
          one_liner?: string | null
          slug?: string | null
          sources?: string[] | null
          status?: string | null
          tier?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "concepts_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
        ]
      }
      published_item_options: {
        Row: {
          is_correct: boolean | null
          item_id: string | null
          key: string | null
          misconception_id: string | null
          text: string | null
          value: string | null
        }
        Relationships: [
          {
            foreignKeyName: "item_options_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "item_options_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "published_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "item_options_misconception_id_fkey"
            columns: ["misconception_id"]
            isOneToOne: false
            referencedRelation: "misconceptions"
            referencedColumns: ["id"]
          },
        ]
      }
      published_items: {
        Row: {
          code: string | null
          concept_id: string | null
          figure: Json | null
          id: string | null
          solution: Json | null
          source: Json | null
          stem: string | null
          verified: boolean | null
          verify: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "items_concept_id_fkey"
            columns: ["concept_id"]
            isOneToOne: false
            referencedRelation: "concepts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "items_concept_id_fkey"
            columns: ["concept_id"]
            isOneToOne: false
            referencedRelation: "published_concepts"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      can_create_person: {
        Args: {
          p_academy: string
          p_role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
      concept_ancestors: {
        Args: { p_concept: string }
        Returns: {
          id: string
        }[]
      }
      create_academy: {
        Args: { p_name: string; p_slug: string }
        Returns: string
      }
      is_valid_solution: { Args: { s: Json }; Returns: boolean }
      mark_review_due: {
        Args: { p_concept: string; p_user: string }
        Returns: undefined
      }
      mastery_streak_needed: { Args: never; Returns: number }
      record_attempt: {
        Args: { p_item: string; p_key: string; p_user: string }
        Returns: Json
      }
      review_answers_needed: { Args: never; Returns: number }
      review_interval: { Args: { p_box: number }; Returns: string }
      seed_chapter: { Args: { p: Json }; Returns: Json }
    }
    Enums: {
      app_role: "student" | "teacher" | "academy_admin" | "superadmin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["student", "teacher", "academy_admin", "superadmin"],
    },
  },
} as const
